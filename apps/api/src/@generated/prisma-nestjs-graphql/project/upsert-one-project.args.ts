import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateInput } from './project-create.input';
import { ProjectUpdateInput } from './project-update.input';

@ArgsType()
export class UpsertOneProjectArgs {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateInput, {nullable:false})
    @Type(() => ProjectCreateInput)
    create!: ProjectCreateInput;

    @Field(() => ProjectUpdateInput, {nullable:false})
    @Type(() => ProjectUpdateInput)
    update!: ProjectUpdateInput;
}
