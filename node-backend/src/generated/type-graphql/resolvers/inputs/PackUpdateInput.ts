import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutPacksAsPackNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutPacksAsPackNestedInput";
import { ProductUpdateOneRequiredWithoutPacksAsProductNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutPacksAsProductNestedInput";

@TypeGraphQL.InputType("PackUpdateInput", {})
export class PackUpdateInput {
  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  qty?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutPacksAsPackNestedInput, {
    nullable: true
  })
  pack?: ProductUpdateOneRequiredWithoutPacksAsPackNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutPacksAsProductNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutPacksAsProductNestedInput | undefined;
}
