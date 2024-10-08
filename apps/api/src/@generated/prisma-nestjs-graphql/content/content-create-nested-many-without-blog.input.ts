import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentCreateWithoutBlogInput } from './content-create-without-blog.input';
import { Type } from 'class-transformer';
import { ContentCreateOrConnectWithoutBlogInput } from './content-create-or-connect-without-blog.input';
import { ContentCreateManyBlogInputEnvelope } from './content-create-many-blog-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';

@InputType()
export class ContentCreateNestedManyWithoutBlogInput {

    @Field(() => [ContentCreateWithoutBlogInput], {nullable:true})
    @Type(() => ContentCreateWithoutBlogInput)
    create?: Array<ContentCreateWithoutBlogInput>;

    @Field(() => [ContentCreateOrConnectWithoutBlogInput], {nullable:true})
    @Type(() => ContentCreateOrConnectWithoutBlogInput)
    connectOrCreate?: Array<ContentCreateOrConnectWithoutBlogInput>;

    @Field(() => ContentCreateManyBlogInputEnvelope, {nullable:true})
    @Type(() => ContentCreateManyBlogInputEnvelope)
    createMany?: ContentCreateManyBlogInputEnvelope;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;
}
