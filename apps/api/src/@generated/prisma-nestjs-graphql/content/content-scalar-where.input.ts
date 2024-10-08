import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumContentStatusFilter } from '../prisma/enum-content-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ContentScalarWhereInput {

    @Field(() => [ContentScalarWhereInput], {nullable:true})
    AND?: Array<ContentScalarWhereInput>;

    @Field(() => [ContentScalarWhereInput], {nullable:true})
    OR?: Array<ContentScalarWhereInput>;

    @Field(() => [ContentScalarWhereInput], {nullable:true})
    NOT?: Array<ContentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

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
}
