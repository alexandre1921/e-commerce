import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCountPacksAsPackArgs } from "./args/ProductCountPacksAsPackArgs";
import { ProductCountPacksAsProductArgs } from "./args/ProductCountPacksAsProductArgs";

@TypeGraphQL.ObjectType("ProductCount", {})
export class ProductCount {
  packsAsPack!: number;
  packsAsProduct!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "packsAsPack",
    nullable: false
  })
  getPacksAsPack(@TypeGraphQL.Root() root: ProductCount, @TypeGraphQL.Args() args: ProductCountPacksAsPackArgs): number {
    return root.packsAsPack;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "packsAsProduct",
    nullable: false
  })
  getPacksAsProduct(@TypeGraphQL.Root() root: ProductCount, @TypeGraphQL.Args() args: ProductCountPacksAsProductArgs): number {
    return root.packsAsProduct;
  }
}
