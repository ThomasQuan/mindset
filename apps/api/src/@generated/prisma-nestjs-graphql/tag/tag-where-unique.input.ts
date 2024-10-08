import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BlogListRelationFilter } from '../blog/blog-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';

@InputType()
export class TagWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [TagWhereInput], {nullable:true})
    AND?: Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {nullable:true})
    OR?: Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {nullable:true})
    NOT?: Array<TagWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    category?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    categoryOrder?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    tagOrder?: IntNullableFilter;

    @Field(() => BlogListRelationFilter, {nullable:true})
    blogs?: BlogListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    projects?: ProjectListRelationFilter;
}
