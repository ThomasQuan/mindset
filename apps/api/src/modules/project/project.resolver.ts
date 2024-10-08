import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { CreateProjectInput } from './dto/createProject.input';
import { UpdateProjectInput } from './dto/updateProject.input';
import { FindManyProjectsInput } from './dto/findManyProject.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Permission } from 'src/decorators/permission';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { Tag } from 'src/@generated/prisma-nestjs-graphql/tag/tag.model';
import { Content } from 'src/@generated/prisma-nestjs-graphql/content/content.model';
import {
  User as UserPrisma,
  Tag as TagPrisma,
  Content as ContentPrisma,
} from '@prisma/client';
import { Project } from 'src/@generated/prisma-nestjs-graphql/project/project.model';
@Resolver(() => Project)
@UseGuards(RolesGuard)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  @Permission(['create', 'project'])
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'project' })
  @Permission(['read', 'project'])
  projects(
    @Args('findManyProjectsInput') findManyProjectsInput: FindManyProjectsInput,
  ) {
    return this.projectService.findMany(findManyProjectsInput);
  }

  @Query(() => Project, { name: 'project' })
  @Permission(['read', 'project'])
  project(@Args('id', { type: () => ID }) id: string) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  @Permission(['update', 'project'])
  updateProject(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Project)
  @Permission(['delete', 'project'])
  deleteProject(@Args('id', { type: () => ID }) id: string) {
    return this.projectService.delete(id);
  }

  @ResolveField(() => User)
  async author(@Parent() project: Project): Promise<UserPrisma> {
    return this.projectService.getAuthor(project.id);
  }

  @ResolveField(() => [Tag])
  async tags(@Parent() project: Project): Promise<TagPrisma[]> {
    return this.projectService.getTags(project.id);
  }

  @ResolveField(() => [Content])
  async contents(@Parent() project: Project): Promise<ContentPrisma[]> {
    return this.projectService.getContents(project.id);
  }
}
