import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogUpdateWithoutBlogStatInput } from './blog-update-without-blog-stat.input';
import { Type } from 'class-transformer';
import { BlogCreateWithoutBlogStatInput } from './blog-create-without-blog-stat.input';
import { BlogWhereInput } from './blog-where.input';

@InputType()
export class BlogUpsertWithoutBlogStatInput {

    @Field(() => BlogUpdateWithoutBlogStatInput, {nullable:false})
    @Type(() => BlogUpdateWithoutBlogStatInput)
    update!: BlogUpdateWithoutBlogStatInput;

    @Field(() => BlogCreateWithoutBlogStatInput, {nullable:false})
    @Type(() => BlogCreateWithoutBlogStatInput)
    create!: BlogCreateWithoutBlogStatInput;

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;
}
