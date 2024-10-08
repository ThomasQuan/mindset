import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatUpdateWithoutBlogInput } from './blog-stat-update-without-blog.input';
import { Type } from 'class-transformer';
import { BlogStatCreateWithoutBlogInput } from './blog-stat-create-without-blog.input';
import { BlogStatWhereInput } from './blog-stat-where.input';

@InputType()
export class BlogStatUpsertWithoutBlogInput {

    @Field(() => BlogStatUpdateWithoutBlogInput, {nullable:false})
    @Type(() => BlogStatUpdateWithoutBlogInput)
    update!: BlogStatUpdateWithoutBlogInput;

    @Field(() => BlogStatCreateWithoutBlogInput, {nullable:false})
    @Type(() => BlogStatCreateWithoutBlogInput)
    create!: BlogStatCreateWithoutBlogInput;

    @Field(() => BlogStatWhereInput, {nullable:true})
    @Type(() => BlogStatWhereInput)
    where?: BlogStatWhereInput;
}
