import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';
import { Type } from 'class-transformer';
import { BlogUpdateWithoutBlogStatInput } from './blog-update-without-blog-stat.input';

@InputType()
export class BlogUpdateToOneWithWhereWithoutBlogStatInput {

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;

    @Field(() => BlogUpdateWithoutBlogStatInput, {nullable:false})
    @Type(() => BlogUpdateWithoutBlogStatInput)
    data!: BlogUpdateWithoutBlogStatInput;
}
