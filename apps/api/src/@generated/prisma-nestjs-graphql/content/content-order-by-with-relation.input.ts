import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BlogOrderByWithRelationInput } from '../blog/blog-order-by-with-relation.input';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';
import { AssetOrderByRelationAggregateInput } from '../asset/asset-order-by-relation-aggregate.input';

@InputType()
export class ContentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    markdownContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    htmlContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    objectAs?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    blogId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BlogOrderByWithRelationInput, {nullable:true})
    blog?: BlogOrderByWithRelationInput;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    project?: ProjectOrderByWithRelationInput;

    @Field(() => AssetOrderByRelationAggregateInput, {nullable:true})
    assets?: AssetOrderByRelationAggregateInput;
}
