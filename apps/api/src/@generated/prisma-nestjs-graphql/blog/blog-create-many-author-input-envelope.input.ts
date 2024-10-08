import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateManyAuthorInput } from './blog-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class BlogCreateManyAuthorInputEnvelope {

    @Field(() => [BlogCreateManyAuthorInput], {nullable:false})
    @Type(() => BlogCreateManyAuthorInput)
    data!: Array<BlogCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
