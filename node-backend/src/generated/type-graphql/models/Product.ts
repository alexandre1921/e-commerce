import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Pack } from "../models/Pack";
import { ProductCount } from "../resolvers/outputs/ProductCount";

@TypeGraphQL.ObjectType("Product", {})
export class Product {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  code!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  costPrice!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  salesPrice!: Prisma.Decimal;

  packsAsPack?: Pack[];

  packsAsProduct?: Pack[];

  @TypeGraphQL.Field(_type => ProductCount, {
    nullable: true
  })
  _count?: ProductCount | null;
}
