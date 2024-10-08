import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Type } from 'class-transformer';
import { ContentCreateWithoutBlogInput } from './content-create-without-blog.input';

@InputType()
export class ContentCreateOrConnectWithoutBlogInput {

    @Field(() => ContentWhereUniqueInput, {nullable:false})
    @Type(() => ContentWhereUniqueInput)
    where!: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;

    @Field(() => ContentCreateWithoutBlogInput, {nullable:false})
    @Type(() => ContentCreateWithoutBlogInput)
    create!: ContentCreateWithoutBlogInput;
}
