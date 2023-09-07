import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { PackUpdateManyWithoutPackNestedInput } from "../inputs/PackUpdateManyWithoutPackNestedInput";
import { PackUpdateManyWithoutProductNestedInput } from "../inputs/PackUpdateManyWithoutProductNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProductUpdateInput", {})
export class ProductUpdateInput {
  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  costPrice?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  salesPrice?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PackUpdateManyWithoutPackNestedInput, {
    nullable: true
  })
  packsAsPack?: PackUpdateManyWithoutPackNestedInput | undefined;

  @TypeGraphQL.Field(_type => PackUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  packsAsProduct?: PackUpdateManyWithoutProductNestedInput | undefined;
}
