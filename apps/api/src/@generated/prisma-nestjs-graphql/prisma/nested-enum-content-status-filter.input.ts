import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentStatus } from './content-status.enum';

@InputType()
export class NestedEnumContentStatusFilter {

    @Field(() => ContentStatus, {nullable:true})
    equals?: keyof typeof ContentStatus;

    @Field(() => [ContentStatus], {nullable:true})
    in?: Array<keyof typeof ContentStatus>;

    @Field(() => [ContentStatus], {nullable:true})
    notIn?: Array<keyof typeof ContentStatus>;

    @Field(() => NestedEnumContentStatusFilter, {nullable:true})
    not?: NestedEnumContentStatusFilter;
}
