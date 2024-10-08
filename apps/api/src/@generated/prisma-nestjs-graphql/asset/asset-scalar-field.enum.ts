import { registerEnumType } from '@nestjs/graphql';

export enum AssetScalarFieldEnum {
    id = "id",
    name = "name",
    url = "url",
    width = "width",
    height = "height",
    resolution = "resolution",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AssetScalarFieldEnum, { name: 'AssetScalarFieldEnum', description: undefined })
