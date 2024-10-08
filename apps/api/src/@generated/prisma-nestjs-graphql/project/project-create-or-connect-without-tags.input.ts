import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutTagsInput } from './project-create-without-tags.input';

@InputType()
export class ProjectCreateOrConnectWithoutTagsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutTagsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutTagsInput)
    create!: ProjectCreateWithoutTagsInput;
}
