import { IsUrl } from 'class-validator';
import { InputType, Field, Int, ID } from '@nestjs/graphql';
import { UpdateContentInput } from 'src/modules/content/dto/updateContent.input';
import { ProjectStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/project-status.enum';

@InputType()
export class UpdateProjectInput {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  subtitle?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  @IsUrl()
  gitRepoLink?: string;

  @IsUrl()
  @Field(() => String, { nullable: true })
  projectLink?: string;

  @IsUrl()
  @Field(() => String, { nullable: true })
  designLink?: string;

  @Field(() => ProjectStatus, { nullable: true })
  status?: ProjectStatus;

  @Field(() => Int, { nullable: true })
  orderNo?: number;

  @Field(() => String, { nullable: true })
  objectAs?: string;

  @Field(() => [String], { nullable: true })
  tagIds?: string[];

  @Field(() => [UpdateContentInput], { nullable: true })
  contents?: UpdateContentInput[];
}
