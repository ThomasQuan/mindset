import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentCreateWithoutBlogInput } from './content-create-without-blog.input';
import { Type } from 'class-transformer';
import { ContentCreateOrConnectWithoutBlogInput } from './content-create-or-connect-without-blog.input';
import { ContentUpsertWithWhereUniqueWithoutBlogInput } from './content-upsert-with-where-unique-without-blog.input';
import { ContentCreateManyBlogInputEnvelope } from './content-create-many-blog-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { ContentUpdateWithWhereUniqueWithoutBlogInput } from './content-update-with-where-unique-without-blog.input';
import { ContentUpdateManyWithWhereWithoutBlogInput } from './content-update-many-with-where-without-blog.input';
import { ContentScalarWhereInput } from './content-scalar-where.input';

@InputType()
export class ContentUncheckedUpdateManyWithoutBlogNestedInput {

    @Field(() => [ContentCreateWithoutBlogInput], {nullable:true})
    @Type(() => ContentCreateWithoutBlogInput)
    create?: Array<ContentCreateWithoutBlogInput>;

    @Field(() => [ContentCreateOrConnectWithoutBlogInput], {nullable:true})
    @Type(() => ContentCreateOrConnectWithoutBlogInput)
    connectOrCreate?: Array<ContentCreateOrConnectWithoutBlogInput>;

    @Field(() => [ContentUpsertWithWhereUniqueWithoutBlogInput], {nullable:true})
    @Type(() => ContentUpsertWithWhereUniqueWithoutBlogInput)
    upsert?: Array<ContentUpsertWithWhereUniqueWithoutBlogInput>;

    @Field(() => ContentCreateManyBlogInputEnvelope, {nullable:true})
    @Type(() => ContentCreateManyBlogInputEnvelope)
    createMany?: ContentCreateManyBlogInputEnvelope;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentUpdateWithWhereUniqueWithoutBlogInput], {nullable:true})
    @Type(() => ContentUpdateWithWhereUniqueWithoutBlogInput)
    update?: Array<ContentUpdateWithWhereUniqueWithoutBlogInput>;

    @Field(() => [ContentUpdateManyWithWhereWithoutBlogInput], {nullable:true})
    @Type(() => ContentUpdateManyWithWhereWithoutBlogInput)
    updateMany?: Array<ContentUpdateManyWithWhereWithoutBlogInput>;

    @Field(() => [ContentScalarWhereInput], {nullable:true})
    @Type(() => ContentScalarWhereInput)
    deleteMany?: Array<ContentScalarWhereInput>;
}
