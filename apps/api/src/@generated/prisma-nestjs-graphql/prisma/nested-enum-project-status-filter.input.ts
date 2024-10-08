import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from './project-status.enum';

@InputType()
export class NestedEnumProjectStatusFilter {

    @Field(() => ProjectStatus, {nullable:true})
    equals?: keyof typeof ProjectStatus;

    @Field(() => [ProjectStatus], {nullable:true})
    in?: Array<keyof typeof ProjectStatus>;

    @Field(() => [ProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof ProjectStatus>;

    @Field(() => NestedEnumProjectStatusFilter, {nullable:true})
    not?: NestedEnumProjectStatusFilter;
}
