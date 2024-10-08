import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';

@InputType()
export class BlogListRelationFilter {

    @Field(() => BlogWhereInput, {nullable:true})
    every?: BlogWhereInput;

    @Field(() => BlogWhereInput, {nullable:true})
    some?: BlogWhereInput;

    @Field(() => BlogWhereInput, {nullable:true})
    none?: BlogWhereInput;
}
