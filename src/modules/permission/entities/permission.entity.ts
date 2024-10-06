import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ActionSlug } from 'src/@generated/prisma-nestjs-graphql/prisma/action-slug.enum';
import { ReferenceModelSlug } from 'src/@generated/prisma-nestjs-graphql/prisma/reference-model-slug.enum';
import { Role } from 'src/modules/role/entities/role.entity';
import {
  ActionSlug as ActionSlugPrisma,
  ReferenceModelSlug as ReferenceModelSlugPrisma,
} from '@prisma/client';
import { Slug } from 'src/decorators/slug';

@ObjectType()
export class Permission {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  @Slug('title')
  slug: string;

  @Field(() => String)
  description: string;

  @Field(() => ReferenceModelSlug)
  referenceModel: ReferenceModelSlugPrisma;

  @Field(() => ActionSlug)
  action: ActionSlugPrisma;

  @Field(() => [Role])
  roles: Role[];
}
