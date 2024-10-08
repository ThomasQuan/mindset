import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionSlug } from './action-slug.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumActionSlugFilter } from './nested-enum-action-slug-filter.input';

@InputType()
export class NestedEnumActionSlugWithAggregatesFilter {

    @Field(() => ActionSlug, {nullable:true})
    equals?: keyof typeof ActionSlug;

    @Field(() => [ActionSlug], {nullable:true})
    in?: Array<keyof typeof ActionSlug>;

    @Field(() => [ActionSlug], {nullable:true})
    notIn?: Array<keyof typeof ActionSlug>;

    @Field(() => NestedEnumActionSlugWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActionSlugWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumActionSlugFilter, {nullable:true})
    _min?: NestedEnumActionSlugFilter;

    @Field(() => NestedEnumActionSlugFilter, {nullable:true})
    _max?: NestedEnumActionSlugFilter;
}
