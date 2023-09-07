import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PackCreateNestedManyWithoutProductInput } from "../inputs/PackCreateNestedManyWithoutProductInput";

@TypeGraphQL.InputType("ProductCreateWithoutPacksAsPackInput", {})
export class ProductCreateWithoutPacksAsPackInput {
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

  @TypeGraphQL.Field(_type => PackCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  packsAsProduct?: PackCreateNestedManyWithoutProductInput | undefined;
}
