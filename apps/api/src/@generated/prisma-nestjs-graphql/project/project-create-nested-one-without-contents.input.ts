import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutContentsInput } from './project-create-without-contents.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutContentsInput } from './project-create-or-connect-without-contents.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutContentsInput {

    @Field(() => ProjectCreateWithoutContentsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutContentsInput)
    create?: ProjectCreateWithoutContentsInput;

    @Field(() => ProjectCreateOrConnectWithoutContentsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutContentsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutContentsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
