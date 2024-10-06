import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/createProject.input';
import { UpdateProjectInput } from './dto/updateProject.input';
import { FindManyProjectsInput } from './dto/findManyProject.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Permission } from 'src/decorators/permission';

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
}
