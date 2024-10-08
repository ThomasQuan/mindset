import { registerEnumType } from '@nestjs/graphql';

export enum ReferenceModelSlug {
    blog = "blog",
    project = "project",
    content = "content",
    asset = "asset",
    tag = "tag",
    user = "user",
    role = "role",
    permission = "permission"
}


registerEnumType(ReferenceModelSlug, { name: 'ReferenceModelSlug', description: undefined })
