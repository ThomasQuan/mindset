import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutContentsInput } from './project-create-without-contents.input';

@InputType()
export class ProjectCreateOrConnectWithoutContentsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutContentsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutContentsInput)
    create!: ProjectCreateWithoutContentsInput;
}
