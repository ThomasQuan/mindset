import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumBlogStatusFilter } from '../prisma/enum-blog-status-filter.input';

@InputType()
export class BlogScalarWhereInput {

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    AND?: Array<BlogScalarWhereInput>;

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    OR?: Array<BlogScalarWhereInput>;

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    NOT?: Array<BlogScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

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
}
