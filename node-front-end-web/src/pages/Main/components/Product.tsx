import { Card, Label } from 'flowbite-react';
import { ProductQuery } from 'generated/graphql';
import { useEffect, useState } from 'react';
import { IPrecificationData } from 'types/PrecificationData';
import { formatPriceToReal } from 'utils/formatPriceToReal';
import { number, object } from 'yup';

export const precificationFileContentSchema = (
  validCodes: number[],
  currentPrice: number,
  cost: number,
  packsAsProduct:
    | {
        id: number;
        packId: number;
        qty: number;
      }
    | undefined,
) =>
  object({
    product_code: number().required('Código do produto é obrigatório').oneOf(validCodes, 'Código do produto inválido'),
    new_price: number()
      .required('Novo preço de venda é obrigatório')
      .test(
        'is-above-min-range',
        'O preço novo deve ser pelo menos 90% do preço atual',
        value => value >= currentPrice * 0.9,
      )
      .test(
        'is-below-max-range',
        'O preço novo deve ser no máximo 110% do preço atual',
        value => value <= currentPrice * 1.1,
      )
      .test('is-above-cost', 'O preço novo não pode ser abaixo do custo', value => value >= cost)
      .test('pack-price-consistency', 'O preço do pacote deve ser a soma dos preços dos componentes', function (value) {
        const { packComponents } = this.options.context;
        if (packComponents) {
          const totalComponentPrice = packComponents.reduce((acc, component) => acc + component.price, 0);
          return value === totalComponentPrice;
        }
        return true;
      }),
  });

const initialErrorsValue = {
  product_code: '',
  new_price: '',
};

interface Props extends IPrecificationData {
  product: ProductQuery['products'][0] | undefined;
  productCodes: number[];
}

export function Product({ product, productCodes, product_code, new_price }: Props) {
  const [errors, setErrors] = useState(initialErrorsValue);

  useEffect(() => {
    precificationFileContentSchema(productCodes, Number(product?.salesPrice) ?? 0, Number(product?.costPrice) ?? 0)
      .validate({ product_code, new_price }, { abortEarly: false })
      .then(() => setErrors(initialErrorsValue))
      .catch(err => err.inner.forEach(e => setErrors({ ...initialErrorsValue, [e.path]: e.message })));
  }, [new_price, product?.costPrice, product?.salesPrice, productCodes, product_code]);

  if (!product) return null;

  const { name, costPrice, salesPrice } = product;

  return (
    <Card>
      <div>
        <p>Código: {product_code}</p>
        <p>Nome: {name}</p>
        <p>Preço de custo: {formatPriceToReal(costPrice)}</p>
        <p>Preço de venda: {formatPriceToReal(salesPrice)}</p>
        <p>Novo preço de venda: {formatPriceToReal(new_price)}</p>
        <Label color="failure" value={errors.new_price || errors.product_code} />
      </div>
    </Card>
  );
}
