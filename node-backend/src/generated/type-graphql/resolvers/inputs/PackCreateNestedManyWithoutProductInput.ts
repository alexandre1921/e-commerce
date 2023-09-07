import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateManyProductInputEnvelope } from "../inputs/PackCreateManyProductInputEnvelope";
import { PackCreateOrConnectWithoutProductInput } from "../inputs/PackCreateOrConnectWithoutProductInput";
import { PackCreateWithoutProductInput } from "../inputs/PackCreateWithoutProductInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackCreateNestedManyWithoutProductInput", {})
export class PackCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [PackCreateWithoutProductInput], {
    nullable: true
  })
  create?: PackCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: PackCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => PackCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: PackCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PackWhereUniqueInput], {
    nullable: true
  })
  connect?: PackWhereUniqueInput[] | undefined;
}
