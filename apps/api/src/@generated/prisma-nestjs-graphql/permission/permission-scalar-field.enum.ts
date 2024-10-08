import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    referenceModel = "referenceModel",
    action = "action"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
