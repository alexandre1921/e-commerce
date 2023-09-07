import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  code = "code",
  name = "name",
  costPrice = "costPrice",
  salesPrice = "salesPrice"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
