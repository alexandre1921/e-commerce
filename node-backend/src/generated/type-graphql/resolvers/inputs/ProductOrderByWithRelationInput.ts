import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackOrderByRelationAggregateInput } from "../inputs/PackOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductOrderByWithRelationInput", {})
export class ProductOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  costPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  salesPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PackOrderByRelationAggregateInput, {
    nullable: true
  })
  packsAsPack?: PackOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PackOrderByRelationAggregateInput, {
    nullable: true
  })
  packsAsProduct?: PackOrderByRelationAggregateInput | undefined;
}
