import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentWhereInput } from './content-where.input';
import { Type } from 'class-transformer';
import { ContentOrderByWithRelationInput } from './content-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContentCountAggregateInput } from './content-count-aggregate.input';
import { ContentAvgAggregateInput } from './content-avg-aggregate.input';
import { ContentSumAggregateInput } from './content-sum-aggregate.input';
import { ContentMinAggregateInput } from './content-min-aggregate.input';
import { ContentMaxAggregateInput } from './content-max-aggregate.input';

@ArgsType()
export class ContentAggregateArgs {

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

    @Field(() => ContentCountAggregateInput, {nullable:true})
    _count?: ContentCountAggregateInput;

    @Field(() => ContentAvgAggregateInput, {nullable:true})
    _avg?: ContentAvgAggregateInput;

    @Field(() => ContentSumAggregateInput, {nullable:true})
    _sum?: ContentSumAggregateInput;

    @Field(() => ContentMinAggregateInput, {nullable:true})
    _min?: ContentMinAggregateInput;

    @Field(() => ContentMaxAggregateInput, {nullable:true})
    _max?: ContentMaxAggregateInput;
}
