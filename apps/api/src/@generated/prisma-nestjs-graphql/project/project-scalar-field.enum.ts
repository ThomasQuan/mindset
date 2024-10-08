import { registerEnumType } from '@nestjs/graphql';

export enum ProjectScalarFieldEnum {
    id = "id",
    name = "name",
    subtitle = "subtitle",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    hasEdited = "hasEdited",
    gitRepoLink = "gitRepoLink",
    projectLink = "projectLink",
    designLink = "designLink",
    status = "status",
    orderNo = "orderNo",
    objectAs = "objectAs",
    authorId = "authorId"
}


registerEnumType(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined })
