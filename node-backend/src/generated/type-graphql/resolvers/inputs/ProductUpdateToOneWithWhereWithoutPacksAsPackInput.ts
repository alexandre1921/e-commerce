import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutPacksAsPackInput } from "../inputs/ProductUpdateWithoutPacksAsPackInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutPacksAsPackInput", {})
export class ProductUpdateToOneWithWhereWithoutPacksAsPackInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutPacksAsPackInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutPacksAsPackInput;
}
