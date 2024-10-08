import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatWhereInput } from './blog-stat-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BlogRelationFilter } from '../blog/blog-relation-filter.input';

@InputType()
export class BlogStatWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    blogId?: string;

    @Field(() => [BlogStatWhereInput], {nullable:true})
    AND?: Array<BlogStatWhereInput>;

    @Field(() => [BlogStatWhereInput], {nullable:true})
    OR?: Array<BlogStatWhereInput>;

    @Field(() => [BlogStatWhereInput], {nullable:true})
    NOT?: Array<BlogStatWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    likedCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    dislikedCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    visitedCount?: IntFilter;

    @Field(() => BlogRelationFilter, {nullable:true})
    blog?: BlogRelationFilter;
}
