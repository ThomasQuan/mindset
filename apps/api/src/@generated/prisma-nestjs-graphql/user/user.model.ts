import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { Role } from '../role/role.model';
import { Blog } from '../blog/blog.model';
import { Project } from '../project/project.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @Field(() => UserStatus, {nullable:false,defaultValue:'CREATED'})
    status!: keyof typeof UserStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    headline!: string | null;

    @Field(() => Date, {nullable:false})
    lastActiveAt!: Date;

    @Field(() => String, {nullable:true})
    avatarURL!: string | null;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => [Blog], {nullable:true})
    blogs?: Array<Blog>;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
