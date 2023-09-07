import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PackOrderByWithRelationInput } from "../../../inputs/PackOrderByWithRelationInput";
import { PackWhereInput } from "../../../inputs/PackWhereInput";
import { PackWhereUniqueInput } from "../../../inputs/PackWhereUniqueInput";
import { PackScalarFieldEnum } from "../../../../enums/PackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPackOrThrowArgs {
  @TypeGraphQL.Field(_type => PackWhereInput, {
    nullable: true
  })
  where?: PackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PackOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PackOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PackWhereUniqueInput, {
    nullable: true
  })
  cursor?: PackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PackScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "packId" | "productId" | "qty"> | undefined;
}
