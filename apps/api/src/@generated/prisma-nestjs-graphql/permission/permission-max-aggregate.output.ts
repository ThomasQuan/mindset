import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReferenceModelSlug } from '../prisma/reference-model-slug.enum';
import { ActionSlug } from '../prisma/action-slug.enum';

@ObjectType()
export class PermissionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReferenceModelSlug, {nullable:true})
    referenceModel?: keyof typeof ReferenceModelSlug;

    @Field(() => ActionSlug, {nullable:true})
    action?: keyof typeof ActionSlug;
}
