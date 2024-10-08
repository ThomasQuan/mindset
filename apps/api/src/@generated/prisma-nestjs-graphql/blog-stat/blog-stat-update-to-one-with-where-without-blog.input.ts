import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatWhereInput } from './blog-stat-where.input';
import { Type } from 'class-transformer';
import { BlogStatUpdateWithoutBlogInput } from './blog-stat-update-without-blog.input';

@InputType()
export class BlogStatUpdateToOneWithWhereWithoutBlogInput {

    @Field(() => BlogStatWhereInput, {nullable:true})
    @Type(() => BlogStatWhereInput)
    where?: BlogStatWhereInput;

    @Field(() => BlogStatUpdateWithoutBlogInput, {nullable:false})
    @Type(() => BlogStatUpdateWithoutBlogInput)
    data!: BlogStatUpdateWithoutBlogInput;
}
