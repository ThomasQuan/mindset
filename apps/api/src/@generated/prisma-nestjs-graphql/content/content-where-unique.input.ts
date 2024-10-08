import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentSlugBlogIdProjectIdObjectAsCompoundUniqueInput } from './content-slug-blog-id-project-id-object-as-compound-unique.input';
import { ContentWhereInput } from './content-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumContentStatusFilter } from '../prisma/enum-content-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BlogNullableRelationFilter } from '../blog/blog-nullable-relation-filter.input';
import { ProjectNullableRelationFilter } from '../project/project-nullable-relation-filter.input';
import { AssetListRelationFilter } from '../asset/asset-list-relation-filter.input';

@InputType()
export class ContentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => ContentSlugBlogIdProjectIdObjectAsCompoundUniqueInput, {nullable:true})
    slug_blogId_projectId_objectAs?: ContentSlugBlogIdProjectIdObjectAsCompoundUniqueInput;

    @Field(() => [ContentWhereInput], {nullable:true})
    AND?: Array<ContentWhereInput>;

    @Field(() => [ContentWhereInput], {nullable:true})
    OR?: Array<ContentWhereInput>;

    @Field(() => [ContentWhereInput], {nullable:true})
    NOT?: Array<ContentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    markdownContent?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    htmlContent?: StringFilter;

    @Field(() => EnumContentStatusFilter, {nullable:true})
    status?: EnumContentStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    orderNo?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    objectAs?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    blogId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    projectId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BlogNullableRelationFilter, {nullable:true})
    blog?: BlogNullableRelationFilter;

    @Field(() => ProjectNullableRelationFilter, {nullable:true})
    project?: ProjectNullableRelationFilter;

    @Field(() => AssetListRelationFilter, {nullable:true})
    assets?: AssetListRelationFilter;
}
