/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregatePack = {
  __typename?: 'AggregatePack';
  _avg?: Maybe<PackAvgAggregate>;
  _count?: Maybe<PackCountAggregate>;
  _max?: Maybe<PackMaxAggregate>;
  _min?: Maybe<PackMinAggregate>;
  _sum?: Maybe<PackSumAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']['input']>;
  divide?: InputMaybe<Scalars['BigInt']['input']>;
  increment?: InputMaybe<Scalars['BigInt']['input']>;
  multiply?: InputMaybe<Scalars['BigInt']['input']>;
  set?: InputMaybe<Scalars['BigInt']['input']>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']['input']>;
  divide?: InputMaybe<Scalars['Decimal']['input']>;
  increment?: InputMaybe<Scalars['Decimal']['input']>;
  multiply?: InputMaybe<Scalars['Decimal']['input']>;
  set?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyPack: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createOnePack: Pack;
  createOneProduct: Product;
  deleteManyPack: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteOnePack?: Maybe<Pack>;
  deleteOneProduct?: Maybe<Product>;
  updateManyPack: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateOnePack?: Maybe<Pack>;
  updateOneProduct?: Maybe<Product>;
  upsertOnePack: Pack;
  upsertOneProduct: Product;
};


export type MutationCreateManyPackArgs = {
  data: Array<PackCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOnePackArgs = {
  data: PackCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationDeleteManyPackArgs = {
  where?: InputMaybe<PackWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteOnePackArgs = {
  where: PackWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationUpdateManyPackArgs = {
  data: PackUpdateManyMutationInput;
  where?: InputMaybe<PackWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateOnePackArgs = {
  data: PackUpdateInput;
  where: PackWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOnePackArgs = {
  create: PackCreateInput;
  update: PackUpdateInput;
  where: PackWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Pack = {
  __typename?: 'Pack';
  id: Scalars['BigInt']['output'];
  packId: Scalars['BigInt']['output'];
  productId: Scalars['BigInt']['output'];
  qty: Scalars['BigInt']['output'];
};

export type PackAvgAggregate = {
  __typename?: 'PackAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  packId?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
};

export type PackAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  packId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type PackCountAggregate = {
  __typename?: 'PackCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  packId: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  qty: Scalars['Int']['output'];
};

export type PackCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  packId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type PackCreateInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  pack: ProductCreateNestedOneWithoutPacksAsPackInput;
  product: ProductCreateNestedOneWithoutPacksAsProductInput;
  qty: Scalars['BigInt']['input'];
};

export type PackCreateManyInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  packId: Scalars['BigInt']['input'];
  productId: Scalars['BigInt']['input'];
  qty: Scalars['BigInt']['input'];
};

export type PackCreateManyPackInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  productId: Scalars['BigInt']['input'];
  qty: Scalars['BigInt']['input'];
};

export type PackCreateManyPackInputEnvelope = {
  data: Array<PackCreateManyPackInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PackCreateManyProductInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  packId: Scalars['BigInt']['input'];
  qty: Scalars['BigInt']['input'];
};

export type PackCreateManyProductInputEnvelope = {
  data: Array<PackCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PackCreateNestedManyWithoutPackInput = {
  connect?: InputMaybe<Array<PackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PackCreateOrConnectWithoutPackInput>>;
  create?: InputMaybe<Array<PackCreateWithoutPackInput>>;
  createMany?: InputMaybe<PackCreateManyPackInputEnvelope>;
};

export type PackCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<PackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PackCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<PackCreateWithoutProductInput>>;
  createMany?: InputMaybe<PackCreateManyProductInputEnvelope>;
};

export type PackCreateOrConnectWithoutPackInput = {
  create: PackCreateWithoutPackInput;
  where: PackWhereUniqueInput;
};

export type PackCreateOrConnectWithoutProductInput = {
  create: PackCreateWithoutProductInput;
  where: PackWhereUniqueInput;
};

export type PackCreateWithoutPackInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  product: ProductCreateNestedOneWithoutPacksAsProductInput;
  qty: Scalars['BigInt']['input'];
};

export type PackCreateWithoutProductInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  pack: ProductCreateNestedOneWithoutPacksAsPackInput;
  qty: Scalars['BigInt']['input'];
};

export type PackGroupBy = {
  __typename?: 'PackGroupBy';
  _avg?: Maybe<PackAvgAggregate>;
  _count?: Maybe<PackCountAggregate>;
  _max?: Maybe<PackMaxAggregate>;
  _min?: Maybe<PackMinAggregate>;
  _sum?: Maybe<PackSumAggregate>;
  id: Scalars['BigInt']['output'];
  packId: Scalars['BigInt']['output'];
  productId: Scalars['BigInt']['output'];
  qty: Scalars['BigInt']['output'];
};

export type PackListRelationFilter = {
  every?: InputMaybe<PackWhereInput>;
  none?: InputMaybe<PackWhereInput>;
  some?: InputMaybe<PackWhereInput>;
};

export type PackMaxAggregate = {
  __typename?: 'PackMaxAggregate';
  id?: Maybe<Scalars['BigInt']['output']>;
  packId?: Maybe<Scalars['BigInt']['output']>;
  productId?: Maybe<Scalars['BigInt']['output']>;
  qty?: Maybe<Scalars['BigInt']['output']>;
};

export type PackMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  packId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type PackMinAggregate = {
  __typename?: 'PackMinAggregate';
  id?: Maybe<Scalars['BigInt']['output']>;
  packId?: Maybe<Scalars['BigInt']['output']>;
  productId?: Maybe<Scalars['BigInt']['output']>;
  qty?: Maybe<Scalars['BigInt']['output']>;
};

export type PackMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  packId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type PackOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PackOrderByWithAggregationInput = {
  _avg?: InputMaybe<PackAvgOrderByAggregateInput>;
  _count?: InputMaybe<PackCountOrderByAggregateInput>;
  _max?: InputMaybe<PackMaxOrderByAggregateInput>;
  _min?: InputMaybe<PackMinOrderByAggregateInput>;
  _sum?: InputMaybe<PackSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  packId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type PackOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  pack?: InputMaybe<ProductOrderByWithRelationInput>;
  packId?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export enum PackScalarFieldEnum {
  Id = 'id',
  PackId = 'packId',
  ProductId = 'productId',
  Qty = 'qty'
}

export type PackScalarWhereInput = {
  AND?: InputMaybe<Array<PackScalarWhereInput>>;
  NOT?: InputMaybe<Array<PackScalarWhereInput>>;
  OR?: InputMaybe<Array<PackScalarWhereInput>>;
  id?: InputMaybe<BigIntFilter>;
  packId?: InputMaybe<BigIntFilter>;
  productId?: InputMaybe<BigIntFilter>;
  qty?: InputMaybe<BigIntFilter>;
};

export type PackScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PackScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PackScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PackScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  packId?: InputMaybe<BigIntWithAggregatesFilter>;
  productId?: InputMaybe<BigIntWithAggregatesFilter>;
  qty?: InputMaybe<BigIntWithAggregatesFilter>;
};

export type PackSumAggregate = {
  __typename?: 'PackSumAggregate';
  id?: Maybe<Scalars['BigInt']['output']>;
  packId?: Maybe<Scalars['BigInt']['output']>;
  productId?: Maybe<Scalars['BigInt']['output']>;
  qty?: Maybe<Scalars['BigInt']['output']>;
};

export type PackSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  packId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type PackUpdateInput = {
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  pack?: InputMaybe<ProductUpdateOneRequiredWithoutPacksAsPackNestedInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutPacksAsProductNestedInput>;
  qty?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type PackUpdateManyMutationInput = {
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  qty?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type PackUpdateManyWithWhereWithoutPackInput = {
  data: PackUpdateManyMutationInput;
  where: PackScalarWhereInput;
};

export type PackUpdateManyWithWhereWithoutProductInput = {
  data: PackUpdateManyMutationInput;
  where: PackScalarWhereInput;
};

export type PackUpdateManyWithoutPackNestedInput = {
  connect?: InputMaybe<Array<PackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PackCreateOrConnectWithoutPackInput>>;
  create?: InputMaybe<Array<PackCreateWithoutPackInput>>;
  createMany?: InputMaybe<PackCreateManyPackInputEnvelope>;
  delete?: InputMaybe<Array<PackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PackWhereUniqueInput>>;
  set?: InputMaybe<Array<PackWhereUniqueInput>>;
  update?: InputMaybe<Array<PackUpdateWithWhereUniqueWithoutPackInput>>;
  updateMany?: InputMaybe<Array<PackUpdateManyWithWhereWithoutPackInput>>;
  upsert?: InputMaybe<Array<PackUpsertWithWhereUniqueWithoutPackInput>>;
};

export type PackUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<PackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PackCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<PackCreateWithoutProductInput>>;
  createMany?: InputMaybe<PackCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<PackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PackWhereUniqueInput>>;
  set?: InputMaybe<Array<PackWhereUniqueInput>>;
  update?: InputMaybe<Array<PackUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<PackUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<PackUpsertWithWhereUniqueWithoutProductInput>>;
};

export type PackUpdateWithWhereUniqueWithoutPackInput = {
  data: PackUpdateWithoutPackInput;
  where: PackWhereUniqueInput;
};

export type PackUpdateWithWhereUniqueWithoutProductInput = {
  data: PackUpdateWithoutProductInput;
  where: PackWhereUniqueInput;
};

export type PackUpdateWithoutPackInput = {
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutPacksAsProductNestedInput>;
  qty?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type PackUpdateWithoutProductInput = {
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  pack?: InputMaybe<ProductUpdateOneRequiredWithoutPacksAsPackNestedInput>;
  qty?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type PackUpsertWithWhereUniqueWithoutPackInput = {
  create: PackCreateWithoutPackInput;
  update: PackUpdateWithoutPackInput;
  where: PackWhereUniqueInput;
};

export type PackUpsertWithWhereUniqueWithoutProductInput = {
  create: PackCreateWithoutProductInput;
  update: PackUpdateWithoutProductInput;
  where: PackWhereUniqueInput;
};

export type PackWhereInput = {
  AND?: InputMaybe<Array<PackWhereInput>>;
  NOT?: InputMaybe<Array<PackWhereInput>>;
  OR?: InputMaybe<Array<PackWhereInput>>;
  id?: InputMaybe<BigIntFilter>;
  pack?: InputMaybe<ProductRelationFilter>;
  packId?: InputMaybe<BigIntFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<BigIntFilter>;
  qty?: InputMaybe<BigIntFilter>;
};

export type PackWhereUniqueInput = {
  AND?: InputMaybe<Array<PackWhereInput>>;
  NOT?: InputMaybe<Array<PackWhereInput>>;
  OR?: InputMaybe<Array<PackWhereInput>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  pack?: InputMaybe<ProductRelationFilter>;
  packId?: InputMaybe<BigIntFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<BigIntFilter>;
  qty?: InputMaybe<BigIntFilter>;
};

export type Product = {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  code: Scalars['BigInt']['output'];
  costPrice: Scalars['Decimal']['output'];
  name: Scalars['String']['output'];
  packsAsPack: Array<Pack>;
  packsAsProduct: Array<Pack>;
  salesPrice: Scalars['Decimal']['output'];
};


export type ProductPacksAsPackArgs = {
  cursor?: InputMaybe<PackWhereUniqueInput>;
  distinct?: InputMaybe<Array<PackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PackWhereInput>;
};


export type ProductPacksAsProductArgs = {
  cursor?: InputMaybe<PackWhereUniqueInput>;
  distinct?: InputMaybe<Array<PackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PackWhereInput>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  code?: Maybe<Scalars['Float']['output']>;
  costPrice?: Maybe<Scalars['Decimal']['output']>;
  salesPrice?: Maybe<Scalars['Decimal']['output']>;
};

export type ProductAvgOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  costPrice?: InputMaybe<SortOrder>;
  salesPrice?: InputMaybe<SortOrder>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  packsAsPack: Scalars['Int']['output'];
  packsAsProduct: Scalars['Int']['output'];
};


export type ProductCountPacksAsPackArgs = {
  where?: InputMaybe<PackWhereInput>;
};


export type ProductCountPacksAsProductArgs = {
  where?: InputMaybe<PackWhereInput>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  costPrice: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  salesPrice: Scalars['Int']['output'];
};

export type ProductCountOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  costPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  salesPrice?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  code: Scalars['BigInt']['input'];
  costPrice: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  packsAsPack?: InputMaybe<PackCreateNestedManyWithoutPackInput>;
  packsAsProduct?: InputMaybe<PackCreateNestedManyWithoutProductInput>;
  salesPrice: Scalars['Decimal']['input'];
};

export type ProductCreateManyInput = {
  code: Scalars['BigInt']['input'];
  costPrice: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  salesPrice: Scalars['Decimal']['input'];
};

export type ProductCreateNestedOneWithoutPacksAsPackInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutPacksAsPackInput>;
  create?: InputMaybe<ProductCreateWithoutPacksAsPackInput>;
};

export type ProductCreateNestedOneWithoutPacksAsProductInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutPacksAsProductInput>;
  create?: InputMaybe<ProductCreateWithoutPacksAsProductInput>;
};

export type ProductCreateOrConnectWithoutPacksAsPackInput = {
  create: ProductCreateWithoutPacksAsPackInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutPacksAsProductInput = {
  create: ProductCreateWithoutPacksAsProductInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutPacksAsPackInput = {
  code: Scalars['BigInt']['input'];
  costPrice: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  packsAsProduct?: InputMaybe<PackCreateNestedManyWithoutProductInput>;
  salesPrice: Scalars['Decimal']['input'];
};

export type ProductCreateWithoutPacksAsProductInput = {
  code: Scalars['BigInt']['input'];
  costPrice: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  packsAsPack?: InputMaybe<PackCreateNestedManyWithoutPackInput>;
  salesPrice: Scalars['Decimal']['input'];
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  code: Scalars['BigInt']['output'];
  costPrice: Scalars['Decimal']['output'];
  name: Scalars['String']['output'];
  salesPrice: Scalars['Decimal']['output'];
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  code?: Maybe<Scalars['BigInt']['output']>;
  costPrice?: Maybe<Scalars['Decimal']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  salesPrice?: Maybe<Scalars['Decimal']['output']>;
};

export type ProductMaxOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  costPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  salesPrice?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  code?: Maybe<Scalars['BigInt']['output']>;
  costPrice?: Maybe<Scalars['Decimal']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  salesPrice?: Maybe<Scalars['Decimal']['output']>;
};

export type ProductMinOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  costPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  salesPrice?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  code?: InputMaybe<SortOrder>;
  costPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  salesPrice?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  costPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  packsAsPack?: InputMaybe<PackOrderByRelationAggregateInput>;
  packsAsProduct?: InputMaybe<PackOrderByRelationAggregateInput>;
  salesPrice?: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  Code = 'code',
  CostPrice = 'costPrice',
  Name = 'name',
  SalesPrice = 'salesPrice'
}

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  code?: InputMaybe<BigIntWithAggregatesFilter>;
  costPrice?: InputMaybe<DecimalWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  salesPrice?: InputMaybe<DecimalWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  code?: Maybe<Scalars['BigInt']['output']>;
  costPrice?: Maybe<Scalars['Decimal']['output']>;
  salesPrice?: Maybe<Scalars['Decimal']['output']>;
};

export type ProductSumOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  costPrice?: InputMaybe<SortOrder>;
  salesPrice?: InputMaybe<SortOrder>;
};

export type ProductUpdateInput = {
  code?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  costPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  packsAsPack?: InputMaybe<PackUpdateManyWithoutPackNestedInput>;
  packsAsProduct?: InputMaybe<PackUpdateManyWithoutProductNestedInput>;
  salesPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  code?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  costPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  salesPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type ProductUpdateOneRequiredWithoutPacksAsPackNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutPacksAsPackInput>;
  create?: InputMaybe<ProductCreateWithoutPacksAsPackInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutPacksAsPackInput>;
  upsert?: InputMaybe<ProductUpsertWithoutPacksAsPackInput>;
};

export type ProductUpdateOneRequiredWithoutPacksAsProductNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutPacksAsProductInput>;
  create?: InputMaybe<ProductCreateWithoutPacksAsProductInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutPacksAsProductInput>;
  upsert?: InputMaybe<ProductUpsertWithoutPacksAsProductInput>;
};

export type ProductUpdateToOneWithWhereWithoutPacksAsPackInput = {
  data: ProductUpdateWithoutPacksAsPackInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutPacksAsProductInput = {
  data: ProductUpdateWithoutPacksAsProductInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateWithoutPacksAsPackInput = {
  code?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  costPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  packsAsProduct?: InputMaybe<PackUpdateManyWithoutProductNestedInput>;
  salesPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutPacksAsProductInput = {
  code?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  costPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  packsAsPack?: InputMaybe<PackUpdateManyWithoutPackNestedInput>;
  salesPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type ProductUpsertWithoutPacksAsPackInput = {
  create: ProductCreateWithoutPacksAsPackInput;
  update: ProductUpdateWithoutPacksAsPackInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutPacksAsProductInput = {
  create: ProductCreateWithoutPacksAsProductInput;
  update: ProductUpdateWithoutPacksAsProductInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  code?: InputMaybe<BigIntFilter>;
  costPrice?: InputMaybe<DecimalFilter>;
  name?: InputMaybe<StringFilter>;
  packsAsPack?: InputMaybe<PackListRelationFilter>;
  packsAsProduct?: InputMaybe<PackListRelationFilter>;
  salesPrice?: InputMaybe<DecimalFilter>;
};

export type ProductWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  code?: InputMaybe<Scalars['BigInt']['input']>;
  costPrice?: InputMaybe<DecimalFilter>;
  name?: InputMaybe<StringFilter>;
  packsAsPack?: InputMaybe<PackListRelationFilter>;
  packsAsProduct?: InputMaybe<PackListRelationFilter>;
  salesPrice?: InputMaybe<DecimalFilter>;
};

export type Query = {
  __typename?: 'Query';
  aggregatePack: AggregatePack;
  aggregateProduct: AggregateProduct;
  findFirstPack?: Maybe<Pack>;
  findFirstPackOrThrow?: Maybe<Pack>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductOrThrow?: Maybe<Product>;
  getPack?: Maybe<Pack>;
  getProduct?: Maybe<Product>;
  groupByPack: Array<PackGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  pack?: Maybe<Pack>;
  packs: Array<Pack>;
  product?: Maybe<Product>;
  products: Array<Product>;
};


export type QueryAggregatePackArgs = {
  cursor?: InputMaybe<PackWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PackWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstPackArgs = {
  cursor?: InputMaybe<PackWhereUniqueInput>;
  distinct?: InputMaybe<Array<PackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PackWhereInput>;
};


export type QueryFindFirstPackOrThrowArgs = {
  cursor?: InputMaybe<PackWhereUniqueInput>;
  distinct?: InputMaybe<Array<PackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PackWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProductOrThrowArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGetPackArgs = {
  where: PackWhereUniqueInput;
};


export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryGroupByPackArgs = {
  by: Array<PackScalarFieldEnum>;
  having?: InputMaybe<PackScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PackOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PackWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryPackArgs = {
  where: PackWhereUniqueInput;
};


export type QueryPacksArgs = {
  cursor?: InputMaybe<PackWhereUniqueInput>;
  distinct?: InputMaybe<Array<PackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PackWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type ProductQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereInput>;
}>;


export type ProductQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', code: any, costPrice: any, name: string, salesPrice: any, packsAsProduct: Array<{ __typename?: 'Pack', id: any, packId: any, qty: any }> }> };

export type UpdateOneProductMutationVariables = Exact<{
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}>;


export type UpdateOneProductMutation = { __typename?: 'Mutation', updateOneProduct?: { __typename?: 'Product', code: any } | null };


export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"costPrice"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"salesPrice"}},{"kind":"Field","name":{"kind":"Name","value":"packsAsProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"packId"}},{"kind":"Field","name":{"kind":"Name","value":"qty"}}]}}]}}]}}]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;
export const UpdateOneProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<UpdateOneProductMutation, UpdateOneProductMutationVariables>;