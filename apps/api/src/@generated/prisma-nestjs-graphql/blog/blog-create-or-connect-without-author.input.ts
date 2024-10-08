import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogCreateWithoutAuthorInput } from './blog-create-without-author.input';

@InputType()
export class BlogCreateOrConnectWithoutAuthorInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => BlogCreateWithoutAuthorInput, {nullable:false})
    @Type(() => BlogCreateWithoutAuthorInput)
    create!: BlogCreateWithoutAuthorInput;
}
