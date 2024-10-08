import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProjectUncheckedCreateNestedManyWithoutTagsInput } from '../project/project-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateWithoutBlogsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:true})
    categoryOrder?: number;

    @Field(() => Int, {nullable:true})
    tagOrder?: number;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    projects?: ProjectUncheckedCreateNestedManyWithoutTagsInput;
}
