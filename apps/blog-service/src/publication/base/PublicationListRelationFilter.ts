/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PublicationWhereInput } from "./PublicationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PublicationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PublicationWhereInput,
  })
  @ValidateNested()
  @Type(() => PublicationWhereInput)
  @IsOptional()
  @Field(() => PublicationWhereInput, {
    nullable: true,
  })
  every?: PublicationWhereInput;

  @ApiProperty({
    required: false,
    type: () => PublicationWhereInput,
  })
  @ValidateNested()
  @Type(() => PublicationWhereInput)
  @IsOptional()
  @Field(() => PublicationWhereInput, {
    nullable: true,
  })
  some?: PublicationWhereInput;

  @ApiProperty({
    required: false,
    type: () => PublicationWhereInput,
  })
  @ValidateNested()
  @Type(() => PublicationWhereInput)
  @IsOptional()
  @Field(() => PublicationWhereInput, {
    nullable: true,
  })
  none?: PublicationWhereInput;
}
export { PublicationListRelationFilter as PublicationListRelationFilter };