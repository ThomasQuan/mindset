import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferenceModelSlug } from '../prisma/reference-model-slug.enum';
import { ActionSlug } from '../prisma/action-slug.enum';
import { RoleUncheckedCreateNestedManyWithoutPermissionsInput } from '../role/role-unchecked-create-nested-many-without-permissions.input';

@InputType()
export class PermissionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReferenceModelSlug, {nullable:false})
    referenceModel!: keyof typeof ReferenceModelSlug;

    @Field(() => ActionSlug, {nullable:false})
    action!: keyof typeof ActionSlug;

    @Field(() => RoleUncheckedCreateNestedManyWithoutPermissionsInput, {nullable:true})
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput;
}
