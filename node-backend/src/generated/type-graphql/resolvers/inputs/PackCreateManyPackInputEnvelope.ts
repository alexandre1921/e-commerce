import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateManyPackInput } from "../inputs/PackCreateManyPackInput";

@TypeGraphQL.InputType("PackCreateManyPackInputEnvelope", {})
export class PackCreateManyPackInputEnvelope {
  @TypeGraphQL.Field(_type => [PackCreateManyPackInput], {
    nullable: false
  })
  data!: PackCreateManyPackInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
