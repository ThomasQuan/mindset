import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUrl } from 'class-validator';
import { ProjectStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/project-status.enum';
import { CreateContentInput } from 'src/modules/content/dto/createContent.input';

@InputType()
export class CreateProjectInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  subtitle: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  @IsUrl()
  gitRepoLink: string;

  @IsUrl()
  @Field(() => String)
  projectLink: string;

  @IsUrl()
  @Field(() => String)
  designLink: string;

  @Field(() => ProjectStatus)
  status: ProjectStatus;

  @Field(() => Int)
  orderNo: number;

  @Field(() => String)
  objectAs: string;

  @Field(() => String)
  authorId: string;

  @Field(() => [String])
  tagIds: string[];

  @Field(() => [CreateContentInput])
  contents: CreateContentInput[];
}
