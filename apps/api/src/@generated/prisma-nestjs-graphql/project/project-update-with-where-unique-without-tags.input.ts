import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutTagsInput } from './project-update-without-tags.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutTagsInput)
    data!: ProjectUpdateWithoutTagsInput;
}
