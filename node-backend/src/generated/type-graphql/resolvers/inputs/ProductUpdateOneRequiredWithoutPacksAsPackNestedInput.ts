import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutPacksAsPackInput } from "../inputs/ProductCreateOrConnectWithoutPacksAsPackInput";
import { ProductCreateWithoutPacksAsPackInput } from "../inputs/ProductCreateWithoutPacksAsPackInput";
import { ProductUpdateToOneWithWhereWithoutPacksAsPackInput } from "../inputs/ProductUpdateToOneWithWhereWithoutPacksAsPackInput";
import { ProductUpsertWithoutPacksAsPackInput } from "../inputs/ProductUpsertWithoutPacksAsPackInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutPacksAsPackNestedInput", {})
export class ProductUpdateOneRequiredWithoutPacksAsPackNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutPacksAsPackInput, {
    nullable: true
  })
  create?: ProductCreateWithoutPacksAsPackInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutPacksAsPackInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutPacksAsPackInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutPacksAsPackInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutPacksAsPackInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutPacksAsPackInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutPacksAsPackInput | undefined;
}
