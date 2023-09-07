import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutPacksAsPackInput } from "../inputs/ProductCreateNestedOneWithoutPacksAsPackInput";
import { ProductCreateNestedOneWithoutPacksAsProductInput } from "../inputs/ProductCreateNestedOneWithoutPacksAsProductInput";

@TypeGraphQL.InputType("PackCreateInput", {})
export class PackCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  qty!: bigint;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutPacksAsPackInput, {
    nullable: false
  })
  pack!: ProductCreateNestedOneWithoutPacksAsPackInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutPacksAsProductInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutPacksAsProductInput;
}
