import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTagsInput } from './project-create-without-tags.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutTagsInput } from './project-create-or-connect-without-tags.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutTagsInput {

    @Field(() => [ProjectCreateWithoutTagsInput], {nullable:true})
    @Type(() => ProjectCreateWithoutTagsInput)
    create?: Array<ProjectCreateWithoutTagsInput>;

    @Field(() => [ProjectCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutTagsInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
