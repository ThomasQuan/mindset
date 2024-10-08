import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTagsInput } from './project-create-without-tags.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutTagsInput } from './project-create-or-connect-without-tags.input';
import { ProjectUpsertWithWhereUniqueWithoutTagsInput } from './project-upsert-with-where-unique-without-tags.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutTagsInput } from './project-update-with-where-unique-without-tags.input';
import { ProjectUpdateManyWithWhereWithoutTagsInput } from './project-update-many-with-where-without-tags.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutTagsNestedInput {

    @Field(() => [ProjectCreateWithoutTagsInput], {nullable:true})
    @Type(() => ProjectCreateWithoutTagsInput)
    create?: Array<ProjectCreateWithoutTagsInput>;

    @Field(() => [ProjectCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutTagsInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutTagsInput>;

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

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
