import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutAuthorInput } from './project-update-without-author.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutAuthorInput)
    data!: ProjectUpdateWithoutAuthorInput;
}
