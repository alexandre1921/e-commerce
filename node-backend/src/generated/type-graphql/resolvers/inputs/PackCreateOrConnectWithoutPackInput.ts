import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateWithoutPackInput } from "../inputs/PackCreateWithoutPackInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackCreateOrConnectWithoutPackInput", {})
export class PackCreateOrConnectWithoutPackInput {
  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: false
  })
  where!: PackWhereUniqueInput;

  @TypeGraphQL.Field(_type => PackCreateWithoutPackInput, {
    nullable: false
  })
  create!: PackCreateWithoutPackInput;
}
