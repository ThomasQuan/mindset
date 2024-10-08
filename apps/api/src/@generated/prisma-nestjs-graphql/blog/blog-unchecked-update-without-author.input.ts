import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumBlogStatusFieldUpdateOperationsInput } from '../prisma/enum-blog-status-field-update-operations.input';
import { TagUncheckedUpdateManyWithoutBlogsNestedInput } from '../tag/tag-unchecked-update-many-without-blogs-nested.input';
import { ContentUncheckedUpdateManyWithoutBlogNestedInput } from '../content/content-unchecked-update-many-without-blog-nested.input';
import { BlogStatUncheckedUpdateOneWithoutBlogNestedInput } from '../blog-stat/blog-stat-unchecked-update-one-without-blog-nested.input';

@InputType()
export class BlogUncheckedUpdateWithoutAuthorInput {

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

    @Field(() => TagUncheckedUpdateManyWithoutBlogsNestedInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutBlogsNestedInput;

    @Field(() => ContentUncheckedUpdateManyWithoutBlogNestedInput, {nullable:true})
    contents?: ContentUncheckedUpdateManyWithoutBlogNestedInput;

    @Field(() => BlogStatUncheckedUpdateOneWithoutBlogNestedInput, {nullable:true})
    blogStat?: BlogStatUncheckedUpdateOneWithoutBlogNestedInput;
}
