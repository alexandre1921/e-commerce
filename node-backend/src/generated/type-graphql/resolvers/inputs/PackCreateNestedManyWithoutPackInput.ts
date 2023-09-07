import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateManyPackInputEnvelope } from "../inputs/PackCreateManyPackInputEnvelope";
import { PackCreateOrConnectWithoutPackInput } from "../inputs/PackCreateOrConnectWithoutPackInput";
import { PackCreateWithoutPackInput } from "../inputs/PackCreateWithoutPackInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackCreateNestedManyWithoutPackInput", {})
export class PackCreateNestedManyWithoutPackInput {
  @TypeGraphQL.Field(_type => [PackCreateWithoutPackInput], {
    nullable: true
  })
  create?: PackCreateWithoutPackInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackCreateOrConnectWithoutPackInput], {
    nullable: true
  })
  connectOrCreate?: PackCreateOrConnectWithoutPackInput[] | undefined;

  @TypeGraphQL.Field(_type => PackCreateManyPackInputEnvelope, {
    nullable: true
  })
  createMany?: PackCreateManyPackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PackWhereUniqueInput], {
    nullable: true
  })
  connect?: PackWhereUniqueInput[] | undefined;
}
