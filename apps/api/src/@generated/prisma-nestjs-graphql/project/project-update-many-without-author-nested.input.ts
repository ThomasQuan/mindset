import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutAuthorInput } from './project-create-without-author.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutAuthorInput } from './project-create-or-connect-without-author.input';
import { ProjectUpsertWithWhereUniqueWithoutAuthorInput } from './project-upsert-with-where-unique-without-author.input';
import { ProjectCreateManyAuthorInputEnvelope } from './project-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutAuthorInput } from './project-update-with-where-unique-without-author.input';
import { ProjectUpdateManyWithWhereWithoutAuthorInput } from './project-update-many-with-where-without-author.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUpdateManyWithoutAuthorNestedInput {

    @Field(() => [ProjectCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ProjectCreateWithoutAuthorInput)
    create?: Array<ProjectCreateWithoutAuthorInput>;

    @Field(() => [ProjectCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => ProjectCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyAuthorInputEnvelope)
    createMany?: ProjectCreateManyAuthorInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
