import { registerEnumType } from '@nestjs/graphql';

export enum TagScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    color = "color",
    category = "category",
    categoryOrder = "categoryOrder",
    tagOrder = "tagOrder"
}


registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
