import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from './project-status.enum';
import { NestedEnumProjectStatusWithAggregatesFilter } from './nested-enum-project-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProjectStatusFilter } from './nested-enum-project-status-filter.input';

@InputType()
export class EnumProjectStatusWithAggregatesFilter {

    @Field(() => ProjectStatus, {nullable:true})
    equals?: keyof typeof ProjectStatus;

    @Field(() => [ProjectStatus], {nullable:true})
    in?: Array<keyof typeof ProjectStatus>;

    @Field(() => [ProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof ProjectStatus>;

    @Field(() => NestedEnumProjectStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProjectStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProjectStatusFilter, {nullable:true})
    _min?: NestedEnumProjectStatusFilter;

    @Field(() => NestedEnumProjectStatusFilter, {nullable:true})
    _max?: NestedEnumProjectStatusFilter;
}
