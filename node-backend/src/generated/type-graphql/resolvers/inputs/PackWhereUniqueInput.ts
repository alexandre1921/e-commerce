import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { PackWhereInput } from "../inputs/PackWhereInput";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";

@TypeGraphQL.InputType("PackWhereUniqueInput", {})
export class PackWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => [PackWhereInput], {
    nullable: true
  })
  AND?: PackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackWhereInput], {
    nullable: true
  })
  OR?: PackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackWhereInput], {
    nullable: true
  })
  NOT?: PackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  packId?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  productId?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  qty?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  pack?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
