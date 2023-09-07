import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateManyProductInput } from "../inputs/PackCreateManyProductInput";

@TypeGraphQL.InputType("PackCreateManyProductInputEnvelope", {})
export class PackCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [PackCreateManyProductInput], {
    nullable: false
  })
  data!: PackCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
