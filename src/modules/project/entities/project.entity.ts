import {
  ObjectType,
  Field,
  Int,
  ID,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import { ProjectStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/project-status.enum';
import { Content } from 'src/modules/content/entities/content.entity';
import { Tag } from 'src/modules/tag/entities/tag.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { ProjectStatus as ProjectStatusPrisma } from '@prisma/client';

@ObjectType()
export class Project {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  subtitle: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => Boolean)
  hasEdited: boolean;

  @Field(() => String, { nullable: true })
  gitRepoLink: string;

  @Field(() => String, { nullable: true })
  projectLink: string;

  @Field(() => String, { nullable: true })
  designLink: string;

  @Field(() => ProjectStatus)
  status: ProjectStatusPrisma;

  @Field(() => Int)
  orderNo: number;

  @Field(() => String)
  objectAs: string;

  @Field(() => User)
  author: User;

  @Field(() => String)
  authorId: string;

  @Field(() => [Tag])
  tags: Tag[];

  @Field(() => [Content])
  contents: Content[];
}
