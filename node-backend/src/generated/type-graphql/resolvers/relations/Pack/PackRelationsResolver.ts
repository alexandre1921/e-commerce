import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pack } from "../../../models/Pack";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pack)
export class PackRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false
  })
  async pack(@TypeGraphQL.Root() pack: Pack, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Product> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pack.findUniqueOrThrow({
      where: {
        id: pack.id,
      },
    }).pack({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false
  })
  async product(@TypeGraphQL.Root() pack: Pack, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Product> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pack.findUniqueOrThrow({
      where: {
        id: pack.id,
      },
    }).product({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
