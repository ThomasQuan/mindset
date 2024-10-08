import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    fullName = "fullName",
    email = "email",
    password = "password",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    headline = "headline",
    lastActiveAt = "lastActiveAt",
    avatarURL = "avatarURL",
    roleId = "roleId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
