import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class BlogStatScalarWhereWithAggregatesInput {

    @Field(() => [BlogStatScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BlogStatScalarWhereWithAggregatesInput>;

    @Field(() => [BlogStatScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BlogStatScalarWhereWithAggregatesInput>;

    @Field(() => [BlogStatScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BlogStatScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    blogId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    likedCount?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    dislikedCount?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    visitedCount?: IntWithAggregatesFilter;
}
