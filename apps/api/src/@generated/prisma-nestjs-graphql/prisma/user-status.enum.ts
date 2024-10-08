import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED",
    DEACTIVATED = "DEACTIVATED",
    PENDING = "PENDING",
    CREATED = "CREATED"
}


registerEnumType(UserStatus, { name: 'UserStatus', description: undefined })
