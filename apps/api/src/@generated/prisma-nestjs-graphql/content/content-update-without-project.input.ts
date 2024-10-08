import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumContentStatusFieldUpdateOperationsInput } from '../prisma/enum-content-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BlogUpdateOneWithoutContentsNestedInput } from '../blog/blog-update-one-without-contents-nested.input';
import { AssetUpdateManyWithoutContentsNestedInput } from '../asset/asset-update-many-without-contents-nested.input';

@InputType()
export class ContentUpdateWithoutProjectInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    markdownContent?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    htmlContent?: StringFieldUpdateOperationsInput;

    @Field(() => EnumContentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumContentStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    orderNo?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    objectAs?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BlogUpdateOneWithoutContentsNestedInput, {nullable:true})
    blog?: BlogUpdateOneWithoutContentsNestedInput;

    @Field(() => AssetUpdateManyWithoutContentsNestedInput, {nullable:true})
    assets?: AssetUpdateManyWithoutContentsNestedInput;
}
