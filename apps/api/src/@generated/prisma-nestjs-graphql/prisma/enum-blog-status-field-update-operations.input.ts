import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatus } from './blog-status.enum';

@InputType()
export class EnumBlogStatusFieldUpdateOperationsInput {

    @Field(() => BlogStatus, {nullable:true})
    set?: keyof typeof BlogStatus;
}
