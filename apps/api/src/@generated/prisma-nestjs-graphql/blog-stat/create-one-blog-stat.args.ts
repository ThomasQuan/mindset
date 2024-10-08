import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogStatCreateInput } from './blog-stat-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBlogStatArgs {

    @Field(() => BlogStatCreateInput, {nullable:false})
    @Type(() => BlogStatCreateInput)
    data!: BlogStatCreateInput;
}
