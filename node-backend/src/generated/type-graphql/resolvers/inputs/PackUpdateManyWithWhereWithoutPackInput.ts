import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackScalarWhereInput } from "../inputs/PackScalarWhereInput";
import { PackUpdateManyMutationInput } from "../inputs/PackUpdateManyMutationInput";

@TypeGraphQL.InputType("PackUpdateManyWithWhereWithoutPackInput", {})
export class PackUpdateManyWithWhereWithoutPackInput {
  @TypeGraphQL.Field(_type => PackScalarWhereInput, {
    nullable: false
  })
  where!: PackScalarWhereInput;

  @TypeGraphQL.Field(_type => PackUpdateManyMutationInput, {
    nullable: false
  })
  data!: PackUpdateManyMutationInput;
}
