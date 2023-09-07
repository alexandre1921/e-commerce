import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";

@TypeGraphQL.InputType("PackWhereInput", {})
export class PackWhereInput {
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
  id?: BigIntFilter | undefined;

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
