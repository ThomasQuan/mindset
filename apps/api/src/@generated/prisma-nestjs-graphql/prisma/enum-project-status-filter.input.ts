import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from './project-status.enum';
import { NestedEnumProjectStatusFilter } from './nested-enum-project-status-filter.input';

@InputType()
export class EnumProjectStatusFilter {

    @Field(() => ProjectStatus, {nullable:true})
    equals?: keyof typeof ProjectStatus;

    @Field(() => [ProjectStatus], {nullable:true})
    in?: Array<keyof typeof ProjectStatus>;

    @Field(() => [ProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof ProjectStatus>;

    @Field(() => NestedEnumProjectStatusFilter, {nullable:true})
    not?: NestedEnumProjectStatusFilter;
}
