import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackWhereInput } from "../inputs/PackWhereInput";

@TypeGraphQL.InputType("PackListRelationFilter", {})
export class PackListRelationFilter {
  @TypeGraphQL.Field(_type => PackWhereInput, {
    nullable: true
  })
  every?: PackWhereInput | undefined;

  @TypeGraphQL.Field(_type => PackWhereInput, {
    nullable: true
  })
  some?: PackWhereInput | undefined;

  @TypeGraphQL.Field(_type => PackWhereInput, {
    nullable: true
  })
  none?: PackWhereInput | undefined;
}
