import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackUpdateWithoutProductInput } from "../inputs/PackUpdateWithoutProductInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackUpdateWithWhereUniqueWithoutProductInput", {})
export class PackUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: false
  })
  where!: PackWhereUniqueInput;

  @TypeGraphQL.Field(_type => PackUpdateWithoutProductInput, {
    nullable: false
  })
  data!: PackUpdateWithoutProductInput;
}
