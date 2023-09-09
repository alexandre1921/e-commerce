import { Button, Card } from 'flowbite-react';
import { useCallback, useEffect, useState } from 'react';
import { useErrorBoundary, withErrorBoundary } from 'react-error-boundary';
import { Formik } from 'formik';
import csvToJson from 'csvtojson';
import { object, string, setLocale } from 'yup';
import { pt } from 'yup-locale-pt';
import { useLazyQuery, useMutation } from '@apollo/client';
import { graphql } from 'generated';
import { FileUpload, ButtonWithLoader } from 'components';
import { arrayToMap } from 'utils/mapper';
import { IPrecificationData } from 'types/PrecificationData';
import { When } from 'react-if';
import { Product, precificationFileContentSchema } from './components/Product';

setLocale(pt);

const precificationSchema = object({
  precificationFileContent: string().required(),
});

const initialValues = {
  precificationFileContent: '',
};

const GET_PRODUCTS_INSERTED = graphql(`
  query Product($where: ProductWhereInput) {
    products(where: $where) {
      code
      costPrice
      name
      salesPrice
      packsAsProduct {
        id
        packId
        qty
      }
    }
  }
`);

const UPDATE_PRODUCT = graphql(`
  mutation UpdateOneProduct($data: ProductUpdateInput!, $where: ProductWhereUniqueInput!) {
    updateOneProduct(data: $data, where: $where) {
      code
    }
  }
`);

function MainBase() {
  const { showBoundary } = useErrorBoundary();
  const [precificationsWithoutValidation, setPrecificationsWithoutValidation] = useState<
    Map<number, IPrecificationData>
  >(new Map());

  const [loadProducts, { loading: isLoading, data: { products } = { products: [] } }] = useLazyQuery(
    GET_PRODUCTS_INSERTED,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
      onError: showBoundary,
    },
  );

  const [updateProduct, { loading: isLoadingUpdateProduct }] = useMutation(UPDATE_PRODUCT, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onError: showBoundary,
  });

  const productsMap = arrayToMap(
    products.map(({ code, ...rest }) => ({
      id: code,
      code,
      ...rest,
    })),
  );
  const productCodes = products.map(({ code }) => code);

  const handleSubmitPrecification = useCallback(
    async ({ precificationFileContent }: typeof initialValues) => {
      try {
        if (precificationFileContent === null) {
          showBoundary(new Error('Arquivo de precificação não encontrado'));
          return;
        }

        const newPrecificationsWithoutValidation = (await csvToJson({
          colParser: { product_code: Number, new_price: Number },
        }).fromString(precificationFileContent)) as IPrecificationData[];

        setPrecificationsWithoutValidation(
          arrayToMap(
            newPrecificationsWithoutValidation.map(({ product_code, ...rest }) => ({
              id: product_code,
              product_code,
              ...rest,
            })),
          ),
        );
      } catch (error) {
        showBoundary(error);
      }
    },
    [showBoundary],
  );

  const handleUpdatePrices = useCallback(async () => {
    await Promise.all(
      Array.from(precificationsWithoutValidation, ([, { new_price, product_code }]) => ({
        variables: {
          data: {
            salesPrice: {
              set: new_price.toString(),
            },
          },
          where: {
            code: product_code,
          },
        },
      })).map(updateProduct),
    );

    setPrecificationsWithoutValidation(new Map());
  }, [precificationsWithoutValidation, updateProduct]);

  useEffect(() => {
    if (precificationsWithoutValidation.size === 0) return;

    loadProducts({
      variables: {
        where: {
          code: {
            in: Array.from(precificationsWithoutValidation, ([, { product_code }]) => product_code),
          },
        },
      },
    });
  }, [loadProducts, precificationsWithoutValidation]);

  const isUpdateButtonDisabled = Array.from(
    precificationsWithoutValidation,
    ([key, precificationWithoutValidation]) => {
      const currentProduct = productsMap.get(key);

      return precificationFileContentSchema(
        productCodes,
        currentProduct?.salesPrice,
        currentProduct?.costPrice,
        currentProduct?.packsAsProduct[0],
      ).isValidSync(precificationWithoutValidation);
    },
  ).some(isValid => !isValid);

  return (
    <div className="">
      <div className="flex justify-center">
        <Card className="border-none shadow-none sm:shadow-md sm:border-solid m-4 self-center">
          <When condition={precificationsWithoutValidation.size === 0 || isUpdateButtonDisabled}>
            <Formik
              initialValues={initialValues}
              validationSchema={precificationSchema}
              onSubmit={handleSubmitPrecification}
            >
              {({ values: { precificationFileContent }, handleSubmit }) => (
                <>
                  <FileUpload
                    helperText="Arraste ou clique aqui para enviar o arquivo de precificação."
                    label="Arquivo de precificação"
                    color="gray"
                    id="precificationFileContent"
                    name="precificationFileContent"
                    accept=".csv"
                    multiple={false}
                  />
                  <ButtonWithLoader
                    isLoaderVisible={!isLoading}
                    onClick={() => handleSubmit()}
                    disabled={!precificationFileContent || isLoading}
                  >
                    Validar
                  </ButtonWithLoader>
                </>
              )}
            </Formik>
          </When>
          <When condition={precificationsWithoutValidation.size > 0 && !isLoading}>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Produtos</h1>
              <div className="flex flex-col gap-4">
                {Array.from(precificationsWithoutValidation, ([key, precificationWithoutValidation]) => (
                  <Product
                    key={key}
                    product={productsMap.get(key)}
                    productCodes={productCodes}
                    {...precificationWithoutValidation}
                  />
                ))}
              </div>
              <ButtonWithLoader
                isLoaderVisible={!isLoadingUpdateProduct}
                onClick={handleUpdatePrices}
                disabled={isUpdateButtonDisabled || isLoadingUpdateProduct}
              >
                Atualizar
              </ButtonWithLoader>
            </div>
          </When>
        </Card>
      </div>
    </div>
  );
}

export const Main = withErrorBoundary(MainBase, {
  FallbackComponent: ({ error, resetErrorBoundary }) => (
    <div role="alert">
      <p>Algo deu errado:</p>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Tentar de novo</Button>
    </div>
  ),
});
