import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogUpdateWithoutContentsInput } from './blog-update-without-contents.input';
import { Type } from 'class-transformer';
import { BlogCreateWithoutContentsInput } from './blog-create-without-contents.input';
import { BlogWhereInput } from './blog-where.input';

@InputType()
export class BlogUpsertWithoutContentsInput {

    @Field(() => BlogUpdateWithoutContentsInput, {nullable:false})
    @Type(() => BlogUpdateWithoutContentsInput)
    update!: BlogUpdateWithoutContentsInput;

    @Field(() => BlogCreateWithoutContentsInput, {nullable:false})
    @Type(() => BlogCreateWithoutContentsInput)
    create!: BlogCreateWithoutContentsInput;

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;
}
