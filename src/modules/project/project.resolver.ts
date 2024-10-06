import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/createProject.input';
import { UpdateProjectInput } from './dto/updateProject.input';
import { FindManyProjectsInput } from './dto/findManyProject.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'project' })
  projects(
    @Args('findManyProjectsInput') findManyProjectsInput: FindManyProjectsInput,
  ) {
    return this.projectService.findMany(findManyProjectsInput);
  }

  @Query(() => Project, { name: 'project' })
  project(@Args('id', { type: () => ID }) id: string) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  updateProject(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Project)
  deleteProject(@Args('id', { type: () => ID }) id: string) {
    return this.projectService.delete(id);
  }
}
