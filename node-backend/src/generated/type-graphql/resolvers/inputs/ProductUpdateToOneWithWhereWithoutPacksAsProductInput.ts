import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutPacksAsProductInput } from "../inputs/ProductUpdateWithoutPacksAsProductInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutPacksAsProductInput", {})
export class ProductUpdateToOneWithWhereWithoutPacksAsProductInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutPacksAsProductInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutPacksAsProductInput;
}
