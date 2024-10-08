import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';
import { PermissionCreateNestedManyWithoutRolesInput } from '../permission/permission-create-nested-many-without-roles.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserCreateNestedManyWithoutRoleInput;

    @Field(() => PermissionCreateNestedManyWithoutRolesInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutRolesInput;
}
