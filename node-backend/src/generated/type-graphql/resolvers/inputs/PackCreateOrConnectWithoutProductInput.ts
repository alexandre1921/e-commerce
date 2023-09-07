import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateWithoutProductInput } from "../inputs/PackCreateWithoutProductInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackCreateOrConnectWithoutProductInput", {})
export class PackCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: false
  })
  where!: PackWhereUniqueInput;

  @TypeGraphQL.Field(_type => PackCreateWithoutProductInput, {
    nullable: false
  })
  create!: PackCreateWithoutProductInput;
}
