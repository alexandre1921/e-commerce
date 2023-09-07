import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutPacksAsPackInput } from "../inputs/ProductCreateWithoutPacksAsPackInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutPacksAsPackInput", {})
export class ProductCreateOrConnectWithoutPacksAsPackInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutPacksAsPackInput, {
    nullable: false
  })
  create!: ProductCreateWithoutPacksAsPackInput;
}
