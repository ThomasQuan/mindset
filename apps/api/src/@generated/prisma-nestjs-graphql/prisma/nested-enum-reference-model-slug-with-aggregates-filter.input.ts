import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferenceModelSlug } from './reference-model-slug.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReferenceModelSlugFilter } from './nested-enum-reference-model-slug-filter.input';

@InputType()
export class NestedEnumReferenceModelSlugWithAggregatesFilter {

    @Field(() => ReferenceModelSlug, {nullable:true})
    equals?: keyof typeof ReferenceModelSlug;

    @Field(() => [ReferenceModelSlug], {nullable:true})
    in?: Array<keyof typeof ReferenceModelSlug>;

    @Field(() => [ReferenceModelSlug], {nullable:true})
    notIn?: Array<keyof typeof ReferenceModelSlug>;

    @Field(() => NestedEnumReferenceModelSlugWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReferenceModelSlugWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReferenceModelSlugFilter, {nullable:true})
    _min?: NestedEnumReferenceModelSlugFilter;

    @Field(() => NestedEnumReferenceModelSlugFilter, {nullable:true})
    _max?: NestedEnumReferenceModelSlugFilter;
}
