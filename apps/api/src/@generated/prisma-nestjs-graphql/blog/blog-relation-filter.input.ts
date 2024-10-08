import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';

@InputType()
export class BlogRelationFilter {

    @Field(() => BlogWhereInput, {nullable:true})
    is?: BlogWhereInput;

    @Field(() => BlogWhereInput, {nullable:true})
    isNot?: BlogWhereInput;
}
