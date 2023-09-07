import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackUpdateInput } from "../../../inputs/PackUpdateInput";
import { PackWhereUniqueInput } from "../../../inputs/PackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePackArgs {
  @TypeGraphQL.Field(_type => PackUpdateInput, {
    nullable: false
  })
  data!: PackUpdateInput;

  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: false
  })
  where!: PackWhereUniqueInput;
}
