import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutProjectsInput } from './tag-create-without-projects.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutProjectsInput } from './tag-create-or-connect-without-projects.input';
import { TagUpsertWithWhereUniqueWithoutProjectsInput } from './tag-upsert-with-where-unique-without-projects.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutProjectsInput } from './tag-update-with-where-unique-without-projects.input';
import { TagUpdateManyWithWhereWithoutProjectsInput } from './tag-update-many-with-where-without-projects.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUncheckedUpdateManyWithoutProjectsNestedInput {

    @Field(() => [TagCreateWithoutProjectsInput], {nullable:true})
    @Type(() => TagCreateWithoutProjectsInput)
    create?: Array<TagCreateWithoutProjectsInput>;

    @Field(() => [TagCreateOrConnectWithoutProjectsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutProjectsInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutProjectsInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutProjectsInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutProjectsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutProjectsInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutProjectsInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutProjectsInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutProjectsInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutProjectsInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutProjectsInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
