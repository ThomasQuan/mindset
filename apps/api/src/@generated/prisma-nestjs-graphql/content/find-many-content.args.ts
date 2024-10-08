import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentWhereInput } from './content-where.input';
import { Type } from 'class-transformer';
import { ContentOrderByWithRelationInput } from './content-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContentScalarFieldEnum } from './content-scalar-field.enum';

@ArgsType()
export class FindManyContentArgs {

    @Field(() => ContentWhereInput, {nullable:true})
    @Type(() => ContentWhereInput)
    where?: ContentWhereInput;

    @Field(() => [ContentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContentOrderByWithRelationInput>;

    @Field(() => ContentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ContentScalarFieldEnum>;
}
