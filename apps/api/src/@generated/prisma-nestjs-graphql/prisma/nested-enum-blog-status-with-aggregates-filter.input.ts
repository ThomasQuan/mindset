import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatus } from './blog-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBlogStatusFilter } from './nested-enum-blog-status-filter.input';

@InputType()
export class NestedEnumBlogStatusWithAggregatesFilter {

    @Field(() => BlogStatus, {nullable:true})
    equals?: keyof typeof BlogStatus;

    @Field(() => [BlogStatus], {nullable:true})
    in?: Array<keyof typeof BlogStatus>;

    @Field(() => [BlogStatus], {nullable:true})
    notIn?: Array<keyof typeof BlogStatus>;

    @Field(() => NestedEnumBlogStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBlogStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBlogStatusFilter, {nullable:true})
    _min?: NestedEnumBlogStatusFilter;

    @Field(() => NestedEnumBlogStatusFilter, {nullable:true})
    _max?: NestedEnumBlogStatusFilter;
}
