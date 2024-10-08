import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumBlogStatusWithAggregatesFilter } from '../prisma/enum-blog-status-with-aggregates-filter.input';

@InputType()
export class BlogScalarWhereWithAggregatesInput {

    @Field(() => [BlogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BlogScalarWhereWithAggregatesInput>;

    @Field(() => [BlogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BlogScalarWhereWithAggregatesInput>;

    @Field(() => [BlogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BlogScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    subtitle?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    hasEdited?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: StringWithAggregatesFilter;

    @Field(() => EnumBlogStatusWithAggregatesFilter, {nullable:true})
    status?: EnumBlogStatusWithAggregatesFilter;
}
