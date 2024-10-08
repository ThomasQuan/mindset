import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutBlogsInput } from './tag-create-without-blogs.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutBlogsInput } from './tag-create-or-connect-without-blogs.input';
import { TagUpsertWithWhereUniqueWithoutBlogsInput } from './tag-upsert-with-where-unique-without-blogs.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutBlogsInput } from './tag-update-with-where-unique-without-blogs.input';
import { TagUpdateManyWithWhereWithoutBlogsInput } from './tag-update-many-with-where-without-blogs.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUpdateManyWithoutBlogsNestedInput {

    @Field(() => [TagCreateWithoutBlogsInput], {nullable:true})
    @Type(() => TagCreateWithoutBlogsInput)
    create?: Array<TagCreateWithoutBlogsInput>;

    @Field(() => [TagCreateOrConnectWithoutBlogsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutBlogsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutBlogsInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutBlogsInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutBlogsInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutBlogsInput>;

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

    @Field(() => [TagUpdateWithWhereUniqueWithoutBlogsInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutBlogsInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutBlogsInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutBlogsInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutBlogsInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutBlogsInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
