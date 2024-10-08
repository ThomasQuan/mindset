import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { BlogUncheckedCreateNestedManyWithoutAuthorInput } from '../blog/blog-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutProjectsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserStatus, {nullable:true})
    status?: keyof typeof UserStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    headline?: string;

    @Field(() => Date, {nullable:true})
    lastActiveAt?: Date | string;

    @Field(() => String, {nullable:true})
    avatarURL?: string;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => BlogUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput;
}
