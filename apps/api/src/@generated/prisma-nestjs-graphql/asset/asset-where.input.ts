import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContentListRelationFilter } from '../content/content-list-relation-filter.input';

@InputType()
export class AssetWhereInput {

    @Field(() => [AssetWhereInput], {nullable:true})
    AND?: Array<AssetWhereInput>;

    @Field(() => [AssetWhereInput], {nullable:true})
    OR?: Array<AssetWhereInput>;

    @Field(() => [AssetWhereInput], {nullable:true})
    NOT?: Array<AssetWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    resolution?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ContentListRelationFilter, {nullable:true})
    contents?: ContentListRelationFilter;
}
