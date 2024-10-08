import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentWhereInput } from './content-where.input';

@InputType()
export class ContentListRelationFilter {

    @Field(() => ContentWhereInput, {nullable:true})
    every?: ContentWhereInput;

    @Field(() => ContentWhereInput, {nullable:true})
    some?: ContentWhereInput;

    @Field(() => ContentWhereInput, {nullable:true})
    none?: ContentWhereInput;
}
