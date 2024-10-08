import { registerEnumType } from '@nestjs/graphql';

export enum BlogStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(BlogStatus, { name: 'BlogStatus', description: undefined })
