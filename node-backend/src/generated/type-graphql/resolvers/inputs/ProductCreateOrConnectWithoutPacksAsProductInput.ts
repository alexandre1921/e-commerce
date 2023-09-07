import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutPacksAsProductInput } from "../inputs/ProductCreateWithoutPacksAsProductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutPacksAsProductInput", {})
export class ProductCreateOrConnectWithoutPacksAsProductInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutPacksAsProductInput, {
    nullable: false
  })
  create!: ProductCreateWithoutPacksAsProductInput;
}
