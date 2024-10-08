import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumProjectStatusFilter } from '../prisma/enum-project-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ProjectScalarWhereInput {

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    AND?: Array<ProjectScalarWhereInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    OR?: Array<ProjectScalarWhereInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
