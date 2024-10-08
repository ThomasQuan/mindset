import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumContentStatusWithAggregatesFilter } from '../prisma/enum-content-status-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ContentScalarWhereWithAggregatesInput {

    @Field(() => [ContentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContentScalarWhereWithAggregatesInput>;

    @Field(() => [ContentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContentScalarWhereWithAggregatesInput>;

    @Field(() => [ContentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    markdownContent?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    htmlContent?: StringWithAggregatesFilter;

    @Field(() => EnumContentStatusWithAggregatesFilter, {nullable:true})
    status?: EnumContentStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    orderNo?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    objectAs?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    blogId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    projectId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
