import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackWhereUniqueInput } from "../../../inputs/PackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePackArgs {
  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: false
  })
  where!: PackWhereUniqueInput;
}
