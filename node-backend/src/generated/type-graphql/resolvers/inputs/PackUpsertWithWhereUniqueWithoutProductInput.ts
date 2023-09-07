import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateWithoutProductInput } from "../inputs/PackCreateWithoutProductInput";
import { PackUpdateWithoutProductInput } from "../inputs/PackUpdateWithoutProductInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackUpsertWithWhereUniqueWithoutProductInput", {})
export class PackUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: false
  })
  where!: PackWhereUniqueInput;

  @TypeGraphQL.Field(_type => PackUpdateWithoutProductInput, {
    nullable: false
  })
  update!: PackUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => PackCreateWithoutProductInput, {
    nullable: false
  })
  create!: PackCreateWithoutProductInput;
}
