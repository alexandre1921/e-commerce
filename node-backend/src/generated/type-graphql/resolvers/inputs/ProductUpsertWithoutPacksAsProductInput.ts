import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutPacksAsProductInput } from "../inputs/ProductCreateWithoutPacksAsProductInput";
import { ProductUpdateWithoutPacksAsProductInput } from "../inputs/ProductUpdateWithoutPacksAsProductInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutPacksAsProductInput", {})
export class ProductUpsertWithoutPacksAsProductInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutPacksAsProductInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutPacksAsProductInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutPacksAsProductInput, {
    nullable: false
  })
  create!: ProductCreateWithoutPacksAsProductInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
