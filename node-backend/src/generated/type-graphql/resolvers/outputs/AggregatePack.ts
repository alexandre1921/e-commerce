import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackAvgAggregate } from "../outputs/PackAvgAggregate";
import { PackCountAggregate } from "../outputs/PackCountAggregate";
import { PackMaxAggregate } from "../outputs/PackMaxAggregate";
import { PackMinAggregate } from "../outputs/PackMinAggregate";
import { PackSumAggregate } from "../outputs/PackSumAggregate";

@TypeGraphQL.ObjectType("AggregatePack", {})
export class AggregatePack {
  @TypeGraphQL.Field(_type => PackCountAggregate, {
    nullable: true
  })
  _count!: PackCountAggregate | null;

  @TypeGraphQL.Field(_type => PackAvgAggregate, {
    nullable: true
  })
  _avg!: PackAvgAggregate | null;

  @TypeGraphQL.Field(_type => PackSumAggregate, {
    nullable: true
  })
  _sum!: PackSumAggregate | null;

  @TypeGraphQL.Field(_type => PackMinAggregate, {
    nullable: true
  })
  _min!: PackMinAggregate | null;

  @TypeGraphQL.Field(_type => PackMaxAggregate, {
    nullable: true
  })
  _max!: PackMaxAggregate | null;
}
