import * as TypeGraphQL from "type-graphql";

export enum PackScalarFieldEnum {
  id = "id",
  packId = "packId",
  productId = "productId",
  qty = "qty"
}
TypeGraphQL.registerEnumType(PackScalarFieldEnum, {
  name: "PackScalarFieldEnum",
  description: undefined,
});
