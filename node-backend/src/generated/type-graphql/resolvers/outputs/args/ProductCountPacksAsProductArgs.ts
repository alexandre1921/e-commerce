import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackWhereInput } from "../../inputs/PackWhereInput";

@TypeGraphQL.ArgsType()
export class ProductCountPacksAsProductArgs {
  @TypeGraphQL.Field(_type => PackWhereInput, {
    nullable: true
  })
  where?: PackWhereInput | undefined;
}
