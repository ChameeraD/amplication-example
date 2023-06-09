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
import { BlogWhereInput } from "./BlogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BlogOrderByInput } from "./BlogOrderByInput";

@ArgsType()
class BlogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BlogWhereInput, { nullable: true })
  @Type(() => BlogWhereInput)
  where?: BlogWhereInput;

  @ApiProperty({
    required: false,
    type: [BlogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BlogOrderByInput], { nullable: true })
  @Type(() => BlogOrderByInput)
  orderBy?: Array<BlogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BlogFindManyArgs as BlogFindManyArgs };
