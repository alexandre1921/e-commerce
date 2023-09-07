import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackUpdateWithoutPackInput } from "../inputs/PackUpdateWithoutPackInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackUpdateWithWhereUniqueWithoutPackInput", {})
export class PackUpdateWithWhereUniqueWithoutPackInput {
  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: false
  })
  where!: PackWhereUniqueInput;

  @TypeGraphQL.Field(_type => PackUpdateWithoutPackInput, {
    nullable: false
  })
  data!: PackUpdateWithoutPackInput;
}
