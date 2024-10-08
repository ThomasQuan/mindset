import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumBlogStatusFilter } from '../prisma/enum-blog-status-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { ContentListRelationFilter } from '../content/content-list-relation-filter.input';
import { BlogStatNullableRelationFilter } from '../blog-stat/blog-stat-nullable-relation-filter.input';

@InputType()
export class BlogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [BlogWhereInput], {nullable:true})
    AND?: Array<BlogWhereInput>;

    @Field(() => [BlogWhereInput], {nullable:true})
    OR?: Array<BlogWhereInput>;

    @Field(() => [BlogWhereInput], {nullable:true})
    NOT?: Array<BlogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subtitle?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    hasEdited?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => EnumBlogStatusFilter, {nullable:true})
    status?: EnumBlogStatusFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;

    @Field(() => ContentListRelationFilter, {nullable:true})
    contents?: ContentListRelationFilter;

    @Field(() => BlogStatNullableRelationFilter, {nullable:true})
    blogStat?: BlogStatNullableRelationFilter;
}
