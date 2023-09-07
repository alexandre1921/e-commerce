import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackWhereInput } from "../../../inputs/PackWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPackArgs {
  @TypeGraphQL.Field(_type => PackWhereInput, {
    nullable: true
  })
  where?: PackWhereInput | undefined;
}
