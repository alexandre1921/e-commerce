import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePackArgs } from "./args/AggregatePackArgs";
import { Pack } from "../../../models/Pack";
import { AggregatePack } from "../../outputs/AggregatePack";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pack)
export class AggregatePackResolver {
  @TypeGraphQL.Query(_returns => AggregatePack, {
    nullable: false
  })
  async aggregatePack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePackArgs): Promise<AggregatePack> {
    return getPrismaFromContext(ctx).pack.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
