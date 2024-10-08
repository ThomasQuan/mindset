import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumBlogStatusFieldUpdateOperationsInput } from '../prisma/enum-blog-status-field-update-operations.input';
import { UserUpdateOneRequiredWithoutBlogsNestedInput } from '../user/user-update-one-required-without-blogs-nested.input';
import { TagUpdateManyWithoutBlogsNestedInput } from '../tag/tag-update-many-without-blogs-nested.input';
import { BlogStatUpdateOneWithoutBlogNestedInput } from '../blog-stat/blog-stat-update-one-without-blog-nested.input';

@InputType()
export class BlogUpdateWithoutContentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subtitle?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasEdited?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumBlogStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumBlogStatusFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutBlogsNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutBlogsNestedInput;

    @Field(() => TagUpdateManyWithoutBlogsNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutBlogsNestedInput;

    @Field(() => BlogStatUpdateOneWithoutBlogNestedInput, {nullable:true})
    blogStat?: BlogStatUpdateOneWithoutBlogNestedInput;
}
