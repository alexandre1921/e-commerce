import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutPacksAsProductInput } from "../inputs/ProductCreateOrConnectWithoutPacksAsProductInput";
import { ProductCreateWithoutPacksAsProductInput } from "../inputs/ProductCreateWithoutPacksAsProductInput";
import { ProductUpdateToOneWithWhereWithoutPacksAsProductInput } from "../inputs/ProductUpdateToOneWithWhereWithoutPacksAsProductInput";
import { ProductUpsertWithoutPacksAsProductInput } from "../inputs/ProductUpsertWithoutPacksAsProductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutPacksAsProductNestedInput", {})
export class ProductUpdateOneRequiredWithoutPacksAsProductNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutPacksAsProductInput, {
    nullable: true
  })
  create?: ProductCreateWithoutPacksAsProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutPacksAsProductInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutPacksAsProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutPacksAsProductInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutPacksAsProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutPacksAsProductInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutPacksAsProductInput | undefined;
}
