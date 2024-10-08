import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Type } from 'class-transformer';
import { ContentUpdateWithoutBlogInput } from './content-update-without-blog.input';
import { ContentCreateWithoutBlogInput } from './content-create-without-blog.input';

@InputType()
export class ContentUpsertWithWhereUniqueWithoutBlogInput {

    @Field(() => ContentWhereUniqueInput, {nullable:false})
    @Type(() => ContentWhereUniqueInput)
    where!: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;

    @Field(() => ContentUpdateWithoutBlogInput, {nullable:false})
    @Type(() => ContentUpdateWithoutBlogInput)
    update!: ContentUpdateWithoutBlogInput;

    @Field(() => ContentCreateWithoutBlogInput, {nullable:false})
    @Type(() => ContentCreateWithoutBlogInput)
    create!: ContentCreateWithoutBlogInput;
}
