import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';
import { Type } from 'class-transformer';
import { BlogOrderByWithRelationInput } from './blog-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlogScalarFieldEnum } from './blog-scalar-field.enum';

@ArgsType()
export class FindFirstBlogOrThrowArgs {

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;

    @Field(() => [BlogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BlogOrderByWithRelationInput>;

    @Field(() => BlogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BlogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlogScalarFieldEnum>;
}
