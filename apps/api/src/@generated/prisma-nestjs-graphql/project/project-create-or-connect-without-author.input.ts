import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutAuthorInput } from './project-create-without-author.input';

@InputType()
export class ProjectCreateOrConnectWithoutAuthorInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ProjectCreateWithoutAuthorInput)
    create!: ProjectCreateWithoutAuthorInput;
}
