import { registerEnumType } from '@nestjs/graphql';

export enum ContentStatus {
    HIDDEN = "HIDDEN",
    VISIBLE = "VISIBLE"
}


registerEnumType(ContentStatus, { name: 'ContentStatus', description: undefined })
