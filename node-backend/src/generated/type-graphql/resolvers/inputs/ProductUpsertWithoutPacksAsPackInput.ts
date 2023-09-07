import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutPacksAsPackInput } from "../inputs/ProductCreateWithoutPacksAsPackInput";
import { ProductUpdateWithoutPacksAsPackInput } from "../inputs/ProductUpdateWithoutPacksAsPackInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutPacksAsPackInput", {})
export class ProductUpsertWithoutPacksAsPackInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutPacksAsPackInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutPacksAsPackInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutPacksAsPackInput, {
    nullable: false
  })
  create!: ProductCreateWithoutPacksAsPackInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
