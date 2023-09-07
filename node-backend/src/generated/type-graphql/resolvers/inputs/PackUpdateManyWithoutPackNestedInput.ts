import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateManyPackInputEnvelope } from "../inputs/PackCreateManyPackInputEnvelope";
import { PackCreateOrConnectWithoutPackInput } from "../inputs/PackCreateOrConnectWithoutPackInput";
import { PackCreateWithoutPackInput } from "../inputs/PackCreateWithoutPackInput";
import { PackScalarWhereInput } from "../inputs/PackScalarWhereInput";
import { PackUpdateManyWithWhereWithoutPackInput } from "../inputs/PackUpdateManyWithWhereWithoutPackInput";
import { PackUpdateWithWhereUniqueWithoutPackInput } from "../inputs/PackUpdateWithWhereUniqueWithoutPackInput";
import { PackUpsertWithWhereUniqueWithoutPackInput } from "../inputs/PackUpsertWithWhereUniqueWithoutPackInput";
import { PackWhereUniqueInput } from "../inputs/PackWhereUniqueInput";

@TypeGraphQL.InputType("PackUpdateManyWithoutPackNestedInput", {})
export class PackUpdateManyWithoutPackNestedInput {
  @TypeGraphQL.Field(_type => [PackCreateWithoutPackInput], {
    nullable: true
  })
  create?: PackCreateWithoutPackInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackCreateOrConnectWithoutPackInput], {
    nullable: true
  })
  connectOrCreate?: PackCreateOrConnectWithoutPackInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackUpsertWithWhereUniqueWithoutPackInput], {
    nullable: true
  })
  upsert?: PackUpsertWithWhereUniqueWithoutPackInput[] | undefined;

  @TypeGraphQL.Field(_type => PackCreateManyPackInputEnvelope, {
    nullable: true
  })
  createMany?: PackCreateManyPackInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PackUpdateWithWhereUniqueWithoutPackInput], {
    nullable: true
  })
  update?: PackUpdateWithWhereUniqueWithoutPackInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackUpdateManyWithWhereWithoutPackInput], {
    nullable: true
  })
  updateMany?: PackUpdateManyWithWhereWithoutPackInput[] | undefined;

  @TypeGraphQL.Field(_type => [PackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PackScalarWhereInput[] | undefined;
}
