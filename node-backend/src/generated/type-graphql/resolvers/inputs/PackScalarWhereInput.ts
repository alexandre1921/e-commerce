import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";

@TypeGraphQL.InputType("PackScalarWhereInput", {})
export class PackScalarWhereInput {
  @TypeGraphQL.Field(_type => [PackScalarWhereInput], {
    nullable: true
  })
  AND?: PackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackScalarWhereInput], {
    nullable: true
  })
  OR?: PackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackScalarWhereInput], {
    nullable: true
  })
  NOT?: PackScalarWhereInput[] | undefined;

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
}
