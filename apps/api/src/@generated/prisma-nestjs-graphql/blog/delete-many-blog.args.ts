import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBlogArgs {

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;
}
