import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProjectCountOrderByAggregateInput } from './project-count-order-by-aggregate.input';
import { ProjectAvgOrderByAggregateInput } from './project-avg-order-by-aggregate.input';
import { ProjectMaxOrderByAggregateInput } from './project-max-order-by-aggregate.input';
import { ProjectMinOrderByAggregateInput } from './project-min-order-by-aggregate.input';
import { ProjectSumOrderByAggregateInput } from './project-sum-order-by-aggregate.input';

@InputType()
export class ProjectOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subtitle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hasEdited?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    gitRepoLink?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    projectLink?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    designLink?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    objectAs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => ProjectCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectCountOrderByAggregateInput;

    @Field(() => ProjectAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProjectAvgOrderByAggregateInput;

    @Field(() => ProjectMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectMaxOrderByAggregateInput;

    @Field(() => ProjectMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectMinOrderByAggregateInput;

    @Field(() => ProjectSumOrderByAggregateInput, {nullable:true})
    _sum?: ProjectSumOrderByAggregateInput;
}
