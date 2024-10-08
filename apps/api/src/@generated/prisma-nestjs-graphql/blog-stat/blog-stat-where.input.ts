import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BlogRelationFilter } from '../blog/blog-relation-filter.input';

@InputType()
export class BlogStatWhereInput {

    @Field(() => [BlogStatWhereInput], {nullable:true})
    AND?: Array<BlogStatWhereInput>;

    @Field(() => [BlogStatWhereInput], {nullable:true})
    OR?: Array<BlogStatWhereInput>;

    @Field(() => [BlogStatWhereInput], {nullable:true})
    NOT?: Array<BlogStatWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    blogId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likedCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    dislikedCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    visitedCount?: IntFilter;

    @Field(() => BlogRelationFilter, {nullable:true})
    blog?: BlogRelationFilter;
}
