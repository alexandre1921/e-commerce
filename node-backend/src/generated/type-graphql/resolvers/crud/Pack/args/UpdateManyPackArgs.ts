import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackUpdateManyMutationInput } from "../../../inputs/PackUpdateManyMutationInput";
import { PackWhereInput } from "../../../inputs/PackWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPackArgs {
  @TypeGraphQL.Field(_type => PackUpdateManyMutationInput, {
    nullable: false
  })
  data!: PackUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PackWhereInput, {
    nullable: true
  })
  where?: PackWhereInput | undefined;
}
