import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from '../prisma/project-status.enum';
import { Int } from '@nestjs/graphql';
import { TagUncheckedCreateNestedManyWithoutProjectsInput } from '../tag/tag-unchecked-create-nested-many-without-projects.input';
import { ContentUncheckedCreateNestedManyWithoutProjectInput } from '../content/content-unchecked-create-nested-many-without-project.input';

@InputType()
export class ProjectUncheckedCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    hasEdited?: boolean;

    @Field(() => String, {nullable:true})
    gitRepoLink?: string;

    @Field(() => String, {nullable:true})
    projectLink?: string;

    @Field(() => String, {nullable:true})
    designLink?: string;

    @Field(() => ProjectStatus, {nullable:true})
    status?: keyof typeof ProjectStatus;

    @Field(() => Int, {nullable:false})
    orderNo!: number;

    @Field(() => String, {nullable:false})
    objectAs!: string;

    @Field(() => TagUncheckedCreateNestedManyWithoutProjectsInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutProjectsInput;

    @Field(() => ContentUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    contents?: ContentUncheckedCreateNestedManyWithoutProjectInput;
}
