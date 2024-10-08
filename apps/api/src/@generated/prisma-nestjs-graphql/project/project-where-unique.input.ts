import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumProjectStatusFilter } from '../prisma/enum-project-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { ContentListRelationFilter } from '../content/content-list-relation-filter.input';

@InputType()
export class ProjectWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProjectWhereInput], {nullable:true})
    AND?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    OR?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    NOT?: Array<ProjectWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    gitRepoLink?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    projectLink?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    designLink?: StringNullableFilter;

    @Field(() => EnumProjectStatusFilter, {nullable:true})
    status?: EnumProjectStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    orderNo?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    objectAs?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;

    @Field(() => ContentListRelationFilter, {nullable:true})
    contents?: ContentListRelationFilter;
}
