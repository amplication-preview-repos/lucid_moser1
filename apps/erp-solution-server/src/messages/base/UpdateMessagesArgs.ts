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
import { MessagesWhereUniqueInput } from "./MessagesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MessagesUpdateInput } from "./MessagesUpdateInput";

@ArgsType()
class UpdateMessagesArgs {
  @ApiProperty({
    required: true,
    type: () => MessagesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MessagesWhereUniqueInput)
  @Field(() => MessagesWhereUniqueInput, { nullable: false })
  where!: MessagesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MessagesUpdateInput,
  })
  @ValidateNested()
  @Type(() => MessagesUpdateInput)
  @Field(() => MessagesUpdateInput, { nullable: false })
  data!: MessagesUpdateInput;
}

export { UpdateMessagesArgs as UpdateMessagesArgs };
