import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BlogUpdateOneRequiredWithoutBlogStatNestedInput } from '../blog/blog-update-one-required-without-blog-stat-nested.input';

@InputType()
export class BlogStatUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likedCount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    dislikedCount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    visitedCount?: IntFieldUpdateOperationsInput;

    @Field(() => BlogUpdateOneRequiredWithoutBlogStatNestedInput, {nullable:true})
    blog?: BlogUpdateOneRequiredWithoutBlogStatNestedInput;
}
