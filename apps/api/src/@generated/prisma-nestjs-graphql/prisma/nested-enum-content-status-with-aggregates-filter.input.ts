import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentStatus } from './content-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumContentStatusFilter } from './nested-enum-content-status-filter.input';

@InputType()
export class NestedEnumContentStatusWithAggregatesFilter {

    @Field(() => ContentStatus, {nullable:true})
    equals?: keyof typeof ContentStatus;

    @Field(() => [ContentStatus], {nullable:true})
    in?: Array<keyof typeof ContentStatus>;

    @Field(() => [ContentStatus], {nullable:true})
    notIn?: Array<keyof typeof ContentStatus>;

    @Field(() => NestedEnumContentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumContentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumContentStatusFilter, {nullable:true})
    _min?: NestedEnumContentStatusFilter;

    @Field(() => NestedEnumContentStatusFilter, {nullable:true})
    _max?: NestedEnumContentStatusFilter;
}
