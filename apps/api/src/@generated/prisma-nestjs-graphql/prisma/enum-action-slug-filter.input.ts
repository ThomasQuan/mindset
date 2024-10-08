import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionSlug } from './action-slug.enum';
import { NestedEnumActionSlugFilter } from './nested-enum-action-slug-filter.input';

@InputType()
export class EnumActionSlugFilter {

    @Field(() => ActionSlug, {nullable:true})
    equals?: keyof typeof ActionSlug;

    @Field(() => [ActionSlug], {nullable:true})
    in?: Array<keyof typeof ActionSlug>;

    @Field(() => [ActionSlug], {nullable:true})
    notIn?: Array<keyof typeof ActionSlug>;

    @Field(() => NestedEnumActionSlugFilter, {nullable:true})
    not?: NestedEnumActionSlugFilter;
}
