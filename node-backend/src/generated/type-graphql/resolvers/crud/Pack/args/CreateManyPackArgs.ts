import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackCreateManyInput } from "../../../inputs/PackCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPackArgs {
  @TypeGraphQL.Field(_type => [PackCreateManyInput], {
    nullable: false
  })
  data!: PackCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
