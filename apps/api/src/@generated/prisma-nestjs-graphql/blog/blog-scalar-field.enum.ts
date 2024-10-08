import { registerEnumType } from '@nestjs/graphql';

export enum BlogScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    subtitle = "subtitle",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    hasEdited = "hasEdited",
    authorId = "authorId",
    status = "status"
}


registerEnumType(BlogScalarFieldEnum, { name: 'BlogScalarFieldEnum', description: undefined })
