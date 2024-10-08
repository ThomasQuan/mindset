import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContentCount {

    @Field(() => Int, {nullable:false})
    assets?: number;
}
