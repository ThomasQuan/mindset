import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferenceModelSlug } from './reference-model-slug.enum';

@InputType()
export class NestedEnumReferenceModelSlugFilter {

    @Field(() => ReferenceModelSlug, {nullable:true})
    equals?: keyof typeof ReferenceModelSlug;

    @Field(() => [ReferenceModelSlug], {nullable:true})
    in?: Array<keyof typeof ReferenceModelSlug>;

    @Field(() => [ReferenceModelSlug], {nullable:true})
    notIn?: Array<keyof typeof ReferenceModelSlug>;

    @Field(() => NestedEnumReferenceModelSlugFilter, {nullable:true})
    not?: NestedEnumReferenceModelSlugFilter;
}
