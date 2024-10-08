import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumReferenceModelSlugFieldUpdateOperationsInput } from '../prisma/enum-reference-model-slug-field-update-operations.input';
import { EnumActionSlugFieldUpdateOperationsInput } from '../prisma/enum-action-slug-field-update-operations.input';

@InputType()
export class PermissionUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumReferenceModelSlugFieldUpdateOperationsInput, {nullable:true})
    referenceModel?: EnumReferenceModelSlugFieldUpdateOperationsInput;

    @Field(() => EnumActionSlugFieldUpdateOperationsInput, {nullable:true})
    action?: EnumActionSlugFieldUpdateOperationsInput;
}
