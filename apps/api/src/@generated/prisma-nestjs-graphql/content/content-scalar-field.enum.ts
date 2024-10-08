import { registerEnumType } from '@nestjs/graphql';

export enum ContentScalarFieldEnum {
    id = "id",
    slug = "slug",
    markdownContent = "markdownContent",
    htmlContent = "htmlContent",
    status = "status",
    orderNo = "orderNo",
    objectAs = "objectAs",
    blogId = "blogId",
    projectId = "projectId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ContentScalarFieldEnum, { name: 'ContentScalarFieldEnum', description: undefined })
