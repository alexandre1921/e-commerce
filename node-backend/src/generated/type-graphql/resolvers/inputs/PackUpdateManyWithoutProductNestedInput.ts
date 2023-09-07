import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateManyProductInputEnvelope } from "../inputs/PackCreateManyProductInputEnvelope";
import { PackCreateOrConnectWithoutProductInput } from "../inputs/PackCreateOrConnectWithoutProductInput";
import { PackCreateWithoutProductInput } from "../inputs/PackCreateWithoutProductInput";
import { PackScalarWhereInput } from "../inputs/PackScalarWhereInput";
import { PackUpdateManyWithWhereWithoutProductInput } from "../inputs/PackUpdateManyWithWhereWithoutProductInput";
import { PackUpdateWithWhereUniqueWithoutProductInput } from "../inputs/PackUpdateWithWhereUniqueWithoutProductInput";
import { PackUpsertWithWhereUniqueWithoutProductInput } from "../inputs/PackUpsertWithWhereUniqueWithoutProductInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackUpdateManyWithoutProductNestedInput", {})
export class PackUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [PackCreateWithoutProductInput], {
    nullable: true
  })
  create?: PackCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: PackCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: PackUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => PackCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: PackCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PackWhereUniqueInput], {
    nullable: true
  })
  set?: PackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackWhereUniqueInput], {
    nullable: true
  })
  delete?: PackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackWhereUniqueInput], {
    nullable: true
  })
  connect?: PackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: PackUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: PackUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PackScalarWhereInput[] | undefined;
}
