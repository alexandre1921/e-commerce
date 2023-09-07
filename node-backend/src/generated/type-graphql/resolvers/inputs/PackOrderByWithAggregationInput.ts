import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackAvgOrderByAggregateInput } from "../inputs/PackAvgOrderByAggregateInput";
import { PackCountOrderByAggregateInput } from "../inputs/PackCountOrderByAggregateInput";
import { PackMaxOrderByAggregateInput } from "../inputs/PackMaxOrderByAggregateInput";
import { PackMinOrderByAggregateInput } from "../inputs/PackMinOrderByAggregateInput";
import { PackSumOrderByAggregateInput } from "../inputs/PackSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PackOrderByWithAggregationInput", {})
export class PackOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  packId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  qty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PackCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PackCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PackAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PackAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PackMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PackMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PackMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PackMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PackSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PackSumOrderByAggregateInput | undefined;
}
