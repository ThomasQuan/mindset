import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from '../prisma/project-status.enum';
import { Int } from '@nestjs/graphql';
import { TagCreateNestedManyWithoutProjectsInput } from '../tag/tag-create-nested-many-without-projects.input';
import { ContentCreateNestedManyWithoutProjectInput } from '../content/content-create-nested-many-without-project.input';

@InputType()
export class ProjectCreateWithoutAuthorInput {

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

    @Field(() => TagCreateNestedManyWithoutProjectsInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutProjectsInput;

    @Field(() => ContentCreateNestedManyWithoutProjectInput, {nullable:true})
    contents?: ContentCreateNestedManyWithoutProjectInput;
}
