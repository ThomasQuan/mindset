import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';
import { Type } from 'class-transformer';
import { BlogUpdateWithoutContentsInput } from './blog-update-without-contents.input';

@InputType()
export class BlogUpdateToOneWithWhereWithoutContentsInput {

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;

    @Field(() => BlogUpdateWithoutContentsInput, {nullable:false})
    @Type(() => BlogUpdateWithoutContentsInput)
    data!: BlogUpdateWithoutContentsInput;
}
