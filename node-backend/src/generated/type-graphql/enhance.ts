import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Product: crudResolvers.ProductCrudResolver,
  Pack: crudResolvers.PackCrudResolver
};
const actionResolversMap = {
  Product: {
    aggregateProduct: actionResolvers.AggregateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    createOneProduct: actionResolvers.CreateOneProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    deleteOneProduct: actionResolvers.DeleteOneProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    findFirstProductOrThrow: actionResolvers.FindFirstProductOrThrowResolver,
    products: actionResolvers.FindManyProductResolver,
    product: actionResolvers.FindUniqueProductResolver,
    getProduct: actionResolvers.FindUniqueProductOrThrowResolver,
    groupByProduct: actionResolvers.GroupByProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    updateOneProduct: actionResolvers.UpdateOneProductResolver,
    upsertOneProduct: actionResolvers.UpsertOneProductResolver
  },
  Pack: {
    aggregatePack: actionResolvers.AggregatePackResolver,
    createManyPack: actionResolvers.CreateManyPackResolver,
    createOnePack: actionResolvers.CreateOnePackResolver,
    deleteManyPack: actionResolvers.DeleteManyPackResolver,
    deleteOnePack: actionResolvers.DeleteOnePackResolver,
    findFirstPack: actionResolvers.FindFirstPackResolver,
    findFirstPackOrThrow: actionResolvers.FindFirstPackOrThrowResolver,
    packs: actionResolvers.FindManyPackResolver,
    pack: actionResolvers.FindUniquePackResolver,
    getPack: actionResolvers.FindUniquePackOrThrowResolver,
    groupByPack: actionResolvers.GroupByPackResolver,
    updateManyPack: actionResolvers.UpdateManyPackResolver,
    updateOnePack: actionResolvers.UpdateOnePackResolver,
    upsertOnePack: actionResolvers.UpsertOnePackResolver
  }
};
const crudResolversInfo = {
  Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
  Pack: ["aggregatePack", "createManyPack", "createOnePack", "deleteManyPack", "deleteOnePack", "findFirstPack", "findFirstPackOrThrow", "packs", "pack", "getPack", "groupByPack", "updateManyPack", "updateOnePack", "upsertOnePack"]
};
const argsInfo = {
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  CreateOneProductArgs: ["data"],
  DeleteManyProductArgs: ["where"],
  DeleteOneProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProductOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductArgs: ["where"],
  FindUniqueProductOrThrowArgs: ["where"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductArgs: ["data", "where"],
  UpdateOneProductArgs: ["data", "where"],
  UpsertOneProductArgs: ["where", "create", "update"],
  AggregatePackArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPackArgs: ["data", "skipDuplicates"],
  CreateOnePackArgs: ["data"],
  DeleteManyPackArgs: ["where"],
  DeleteOnePackArgs: ["where"],
  FindFirstPackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPackOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePackArgs: ["where"],
  FindUniquePackOrThrowArgs: ["where"],
  GroupByPackArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPackArgs: ["data", "where"],
  UpdateOnePackArgs: ["data", "where"],
  UpsertOnePackArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Product: relationResolvers.ProductRelationsResolver,
  Pack: relationResolvers.PackRelationsResolver
};
const relationResolversInfo = {
  Product: ["packsAsPack", "packsAsProduct"],
  Pack: ["pack", "product"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Product: ["code", "name", "costPrice", "salesPrice"],
  Pack: ["id", "packId", "productId", "qty"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["code", "name", "costPrice", "salesPrice", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePack: ["_count", "_avg", "_sum", "_min", "_max"],
  PackGroupBy: ["id", "packId", "productId", "qty", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ProductCount: ["packsAsPack", "packsAsProduct"],
  ProductCountAggregate: ["code", "name", "costPrice", "salesPrice", "_all"],
  ProductAvgAggregate: ["code", "costPrice", "salesPrice"],
  ProductSumAggregate: ["code", "costPrice", "salesPrice"],
  ProductMinAggregate: ["code", "name", "costPrice", "salesPrice"],
  ProductMaxAggregate: ["code", "name", "costPrice", "salesPrice"],
  PackCountAggregate: ["id", "packId", "productId", "qty", "_all"],
  PackAvgAggregate: ["id", "packId", "productId", "qty"],
  PackSumAggregate: ["id", "packId", "productId", "qty"],
  PackMinAggregate: ["id", "packId", "productId", "qty"],
  PackMaxAggregate: ["id", "packId", "productId", "qty"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  ProductWhereInput: ["AND", "OR", "NOT", "code", "name", "costPrice", "salesPrice", "packsAsPack", "packsAsProduct"],
  ProductOrderByWithRelationInput: ["code", "name", "costPrice", "salesPrice", "packsAsPack", "packsAsProduct"],
  ProductWhereUniqueInput: ["code", "AND", "OR", "NOT", "name", "costPrice", "salesPrice", "packsAsPack", "packsAsProduct"],
  ProductOrderByWithAggregationInput: ["code", "name", "costPrice", "salesPrice", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "code", "name", "costPrice", "salesPrice"],
  PackWhereInput: ["AND", "OR", "NOT", "id", "packId", "productId", "qty", "pack", "product"],
  PackOrderByWithRelationInput: ["id", "packId", "productId", "qty", "pack", "product"],
  PackWhereUniqueInput: ["id", "AND", "OR", "NOT", "packId", "productId", "qty", "pack", "product"],
  PackOrderByWithAggregationInput: ["id", "packId", "productId", "qty", "_count", "_avg", "_max", "_min", "_sum"],
  PackScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "packId", "productId", "qty"],
  ProductCreateInput: ["code", "name", "costPrice", "salesPrice", "packsAsPack", "packsAsProduct"],
  ProductUpdateInput: ["code", "name", "costPrice", "salesPrice", "packsAsPack", "packsAsProduct"],
  ProductCreateManyInput: ["code", "name", "costPrice", "salesPrice"],
  ProductUpdateManyMutationInput: ["code", "name", "costPrice", "salesPrice"],
  PackCreateInput: ["id", "qty", "pack", "product"],
  PackUpdateInput: ["id", "qty", "pack", "product"],
  PackCreateManyInput: ["id", "packId", "productId", "qty"],
  PackUpdateManyMutationInput: ["id", "qty"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PackListRelationFilter: ["every", "some", "none"],
  PackOrderByRelationAggregateInput: ["_count"],
  ProductCountOrderByAggregateInput: ["code", "name", "costPrice", "salesPrice"],
  ProductAvgOrderByAggregateInput: ["code", "costPrice", "salesPrice"],
  ProductMaxOrderByAggregateInput: ["code", "name", "costPrice", "salesPrice"],
  ProductMinOrderByAggregateInput: ["code", "name", "costPrice", "salesPrice"],
  ProductSumOrderByAggregateInput: ["code", "costPrice", "salesPrice"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ProductRelationFilter: ["is", "isNot"],
  PackCountOrderByAggregateInput: ["id", "packId", "productId", "qty"],
  PackAvgOrderByAggregateInput: ["id", "packId", "productId", "qty"],
  PackMaxOrderByAggregateInput: ["id", "packId", "productId", "qty"],
  PackMinOrderByAggregateInput: ["id", "packId", "productId", "qty"],
  PackSumOrderByAggregateInput: ["id", "packId", "productId", "qty"],
  PackCreateNestedManyWithoutPackInput: ["create", "connectOrCreate", "createMany", "connect"],
  PackCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  StringFieldUpdateOperationsInput: ["set"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PackUpdateManyWithoutPackNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PackUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductCreateNestedOneWithoutPacksAsPackInput: ["create", "connectOrCreate", "connect"],
  ProductCreateNestedOneWithoutPacksAsProductInput: ["create", "connectOrCreate", "connect"],
  ProductUpdateOneRequiredWithoutPacksAsPackNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductUpdateOneRequiredWithoutPacksAsProductNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  PackCreateWithoutPackInput: ["id", "qty", "product"],
  PackCreateOrConnectWithoutPackInput: ["where", "create"],
  PackCreateManyPackInputEnvelope: ["data", "skipDuplicates"],
  PackCreateWithoutProductInput: ["id", "qty", "pack"],
  PackCreateOrConnectWithoutProductInput: ["where", "create"],
  PackCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  PackUpsertWithWhereUniqueWithoutPackInput: ["where", "update", "create"],
  PackUpdateWithWhereUniqueWithoutPackInput: ["where", "data"],
  PackUpdateManyWithWhereWithoutPackInput: ["where", "data"],
  PackScalarWhereInput: ["AND", "OR", "NOT", "id", "packId", "productId", "qty"],
  PackUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  PackUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  PackUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  ProductCreateWithoutPacksAsPackInput: ["code", "name", "costPrice", "salesPrice", "packsAsProduct"],
  ProductCreateOrConnectWithoutPacksAsPackInput: ["where", "create"],
  ProductCreateWithoutPacksAsProductInput: ["code", "name", "costPrice", "salesPrice", "packsAsPack"],
  ProductCreateOrConnectWithoutPacksAsProductInput: ["where", "create"],
  ProductUpsertWithoutPacksAsPackInput: ["update", "create", "where"],
  ProductUpdateToOneWithWhereWithoutPacksAsPackInput: ["where", "data"],
  ProductUpdateWithoutPacksAsPackInput: ["code", "name", "costPrice", "salesPrice", "packsAsProduct"],
  ProductUpsertWithoutPacksAsProductInput: ["update", "create", "where"],
  ProductUpdateToOneWithWhereWithoutPacksAsProductInput: ["where", "data"],
  ProductUpdateWithoutPacksAsProductInput: ["code", "name", "costPrice", "salesPrice", "packsAsPack"],
  PackCreateManyPackInput: ["id", "productId", "qty"],
  PackCreateManyProductInput: ["id", "packId", "qty"],
  PackUpdateWithoutPackInput: ["id", "qty", "product"],
  PackUpdateWithoutProductInput: ["id", "qty", "pack"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

