import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumUserStatusFilter } from '../prisma/enum-user-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { BlogListRelationFilter } from '../blog/blog-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fullName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => EnumUserStatusFilter, {nullable:true})
    status?: EnumUserStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    headline?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    lastActiveAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarURL?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => BlogListRelationFilter, {nullable:true})
    blogs?: BlogListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    projects?: ProjectListRelationFilter;
}
