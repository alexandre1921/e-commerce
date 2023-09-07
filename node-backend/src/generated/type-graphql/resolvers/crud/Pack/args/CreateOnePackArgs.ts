import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackCreateInput } from "../../../inputs/PackCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePackArgs {
  @TypeGraphQL.Field(_type => PackCreateInput, {
    nullable: false
  })
  data!: PackCreateInput;
}
