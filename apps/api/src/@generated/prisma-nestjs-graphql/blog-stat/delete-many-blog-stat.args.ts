import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogStatWhereInput } from './blog-stat-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBlogStatArgs {

    @Field(() => BlogStatWhereInput, {nullable:true})
    @Type(() => BlogStatWhereInput)
    where?: BlogStatWhereInput;
}
