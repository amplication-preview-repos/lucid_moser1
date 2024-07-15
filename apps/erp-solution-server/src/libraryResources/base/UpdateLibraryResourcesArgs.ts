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
import { LibraryResourcesWhereUniqueInput } from "./LibraryResourcesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LibraryResourcesUpdateInput } from "./LibraryResourcesUpdateInput";

@ArgsType()
class UpdateLibraryResourcesArgs {
  @ApiProperty({
    required: true,
    type: () => LibraryResourcesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LibraryResourcesWhereUniqueInput)
  @Field(() => LibraryResourcesWhereUniqueInput, { nullable: false })
  where!: LibraryResourcesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LibraryResourcesUpdateInput,
  })
  @ValidateNested()
  @Type(() => LibraryResourcesUpdateInput)
  @Field(() => LibraryResourcesUpdateInput, { nullable: false })
  data!: LibraryResourcesUpdateInput;
}

export { UpdateLibraryResourcesArgs as UpdateLibraryResourcesArgs };
