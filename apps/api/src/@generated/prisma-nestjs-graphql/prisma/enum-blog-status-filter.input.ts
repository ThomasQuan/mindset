import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatus } from './blog-status.enum';
import { NestedEnumBlogStatusFilter } from './nested-enum-blog-status-filter.input';

@InputType()
export class EnumBlogStatusFilter {

    @Field(() => BlogStatus, {nullable:true})
    equals?: keyof typeof BlogStatus;

    @Field(() => [BlogStatus], {nullable:true})
    in?: Array<keyof typeof BlogStatus>;

    @Field(() => [BlogStatus], {nullable:true})
    notIn?: Array<keyof typeof BlogStatus>;

    @Field(() => NestedEnumBlogStatusFilter, {nullable:true})
    not?: NestedEnumBlogStatusFilter;
}
