import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferenceModelSlug } from './reference-model-slug.enum';

@InputType()
export class EnumReferenceModelSlugFieldUpdateOperationsInput {

    @Field(() => ReferenceModelSlug, {nullable:true})
    set?: keyof typeof ReferenceModelSlug;
}
