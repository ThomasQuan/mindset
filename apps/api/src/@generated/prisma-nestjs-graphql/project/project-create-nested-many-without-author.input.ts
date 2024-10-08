import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutAuthorInput } from './project-create-without-author.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutAuthorInput } from './project-create-or-connect-without-author.input';
import { ProjectCreateManyAuthorInputEnvelope } from './project-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutAuthorInput {

    @Field(() => [ProjectCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ProjectCreateWithoutAuthorInput)
    create?: Array<ProjectCreateWithoutAuthorInput>;

    @Field(() => [ProjectCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutAuthorInput>;

    @Field(() => ProjectCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyAuthorInputEnvelope)
    createMany?: ProjectCreateManyAuthorInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
