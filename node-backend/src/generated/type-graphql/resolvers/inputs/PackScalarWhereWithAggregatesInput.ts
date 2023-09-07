import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";

@TypeGraphQL.InputType("PackScalarWhereWithAggregatesInput", {})
export class PackScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  packId?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  productId?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  qty?: BigIntWithAggregatesFilter | undefined;
}
