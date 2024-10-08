import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatWhereInput } from './blog-stat-where.input';

@InputType()
export class BlogStatNullableRelationFilter {

    @Field(() => BlogStatWhereInput, {nullable:true})
    is?: BlogStatWhereInput;

    @Field(() => BlogStatWhereInput, {nullable:true})
    isNot?: BlogStatWhereInput;
}
