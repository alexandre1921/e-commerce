import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackCreateInput } from "../../../inputs/PackCreateInput";
import { PackUpdateInput } from "../../../inputs/PackUpdateInput";
import { PackWhereUniqueInput } from "../../../inputs/PackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePackArgs {
  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: false
  })
  where!: PackWhereUniqueInput;

  @TypeGraphQL.Field(_type => PackCreateInput, {
    nullable: false
  })
  create!: PackCreateInput;

  @TypeGraphQL.Field(_type => PackUpdateInput, {
    nullable: false
  })
  update!: PackUpdateInput;
}
