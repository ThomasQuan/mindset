import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferenceModelSlug } from './reference-model-slug.enum';
import { NestedEnumReferenceModelSlugFilter } from './nested-enum-reference-model-slug-filter.input';

@InputType()
export class EnumReferenceModelSlugFilter {

    @Field(() => ReferenceModelSlug, {nullable:true})
    equals?: keyof typeof ReferenceModelSlug;

    @Field(() => [ReferenceModelSlug], {nullable:true})
    in?: Array<keyof typeof ReferenceModelSlug>;

    @Field(() => [ReferenceModelSlug], {nullable:true})
    notIn?: Array<keyof typeof ReferenceModelSlug>;

    @Field(() => NestedEnumReferenceModelSlugFilter, {nullable:true})
    not?: NestedEnumReferenceModelSlugFilter;
}
