import { registerEnumType } from '@nestjs/graphql';

export enum BlogStatScalarFieldEnum {
    id = "id",
    blogId = "blogId",
    likedCount = "likedCount",
    dislikedCount = "dislikedCount",
    visitedCount = "visitedCount"
}


registerEnumType(BlogStatScalarFieldEnum, { name: 'BlogStatScalarFieldEnum', description: undefined })
