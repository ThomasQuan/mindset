import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ReferenceModelSlug } from '../prisma/reference-model-slug.enum';
import { ActionSlug } from '../prisma/action-slug.enum';
import { Role } from '../role/role.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ReferenceModelSlug, {nullable:false})
    referenceModel!: keyof typeof ReferenceModelSlug;

    @Field(() => ActionSlug, {nullable:false})
    action!: keyof typeof ActionSlug;

    @Field(() => [Role], {nullable:true})
    roles?: Array<Role>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
