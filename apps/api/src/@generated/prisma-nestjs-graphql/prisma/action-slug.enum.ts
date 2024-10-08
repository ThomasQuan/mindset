import { registerEnumType } from '@nestjs/graphql';

export enum ActionSlug {
    create = "create",
    read = "read",
    update = "update",
    'delete' = "delete"
}


registerEnumType(ActionSlug, { name: 'ActionSlug', description: undefined })
