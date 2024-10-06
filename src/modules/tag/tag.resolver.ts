import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/createTag.input';
import { UpdateTagInput } from './dto/updateTag.input';
import { FindManyTagsInput } from './dto/findManyTags.input';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { UseGuards } from '@nestjs/common';
import { Permission } from 'src/decorators/permission';

@Resolver(() => Tag)
@UseGuards(RolesGuard)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Query(() => [Tag])
  @Permission(['read', 'tag'])
  tags(
    @Args('findManyTagsInput', { nullable: true })
    findManyTagsInput?: FindManyTagsInput,
  ) {
    return this.tagService.findMany(findManyTagsInput);
  }

  @Query(() => Tag)
  @Permission(['read', 'tag'])
  tag(@Args('id', { type: () => ID }) id: string) {
    return this.tagService.findOne(id);
  }

  @Mutation(() => Tag)
  @Permission(['create', 'tag'])
  createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagService.create(createTagInput);
  }

  @Mutation(() => Tag)
  @Permission(['update', 'tag'])
  updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return this.tagService.update(updateTagInput.id, updateTagInput);
  }

  @Mutation(() => Tag)
  @Permission(['delete', 'tag'])
  deleteTag(@Args('id', { type: () => ID }) id: string) {
    return this.tagService.delete(id);
  }
}
