/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PublicationWhereUniqueInput } from "./PublicationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PublicationUpdateInput } from "./PublicationUpdateInput";

@ArgsType()
class UpdatePublicationArgs {
  @ApiProperty({
    required: true,
    type: () => PublicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PublicationWhereUniqueInput)
  @Field(() => PublicationWhereUniqueInput, { nullable: false })
  where!: PublicationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PublicationUpdateInput,
  })
  @ValidateNested()
  @Type(() => PublicationUpdateInput)
  @Field(() => PublicationUpdateInput, { nullable: false })
  data!: PublicationUpdateInput;
}

export { UpdatePublicationArgs as UpdatePublicationArgs };
