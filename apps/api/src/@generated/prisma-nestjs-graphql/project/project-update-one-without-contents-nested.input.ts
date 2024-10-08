import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutContentsInput } from './project-create-without-contents.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutContentsInput } from './project-create-or-connect-without-contents.input';
import { ProjectUpsertWithoutContentsInput } from './project-upsert-without-contents.input';
import { ProjectWhereInput } from './project-where.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutContentsInput } from './project-update-to-one-with-where-without-contents.input';

@InputType()
export class ProjectUpdateOneWithoutContentsNestedInput {

    @Field(() => ProjectCreateWithoutContentsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutContentsInput)
    create?: ProjectCreateWithoutContentsInput;

    @Field(() => ProjectCreateOrConnectWithoutContentsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutContentsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutContentsInput;

    @Field(() => ProjectUpsertWithoutContentsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutContentsInput)
    upsert?: ProjectUpsertWithoutContentsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    disconnect?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    delete?: ProjectWhereInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutContentsInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutContentsInput)
    update?: ProjectUpdateToOneWithWhereWithoutContentsInput;
}
