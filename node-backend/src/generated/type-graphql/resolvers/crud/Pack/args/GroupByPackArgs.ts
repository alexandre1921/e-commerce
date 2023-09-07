import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackOrderByWithAggregationInput } from "../../../inputs/PackOrderByWithAggregationInput";
import { PackScalarWhereWithAggregatesInput } from "../../../inputs/PackScalarWhereWithAggregatesInput";
import { PackWhereInput } from "../../../inputs/PackWhereInput";
import { PackScalarFieldEnum } from "../../../../enums/PackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPackArgs {
  @TypeGraphQL.Field(_type => PackWhereInput, {
    nullable: true
  })
  where?: PackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PackOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PackOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "packId" | "productId" | "qty">;

  @TypeGraphQL.Field(_type => PackScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PackScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
