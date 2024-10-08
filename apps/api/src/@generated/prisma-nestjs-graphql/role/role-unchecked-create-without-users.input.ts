import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUncheckedCreateNestedManyWithoutRolesInput } from '../permission/permission-unchecked-create-nested-many-without-roles.input';

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {

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

    @Field(() => PermissionUncheckedCreateNestedManyWithoutRolesInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput;
}
