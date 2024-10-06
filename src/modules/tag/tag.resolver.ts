import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/createTag.input';
import { UpdateTagInput } from './dto/updateTag.input';
import { FindManyTagsInput } from './dto/findManyTags.input';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Query(() => [Tag])
  tags(
    @Args('findManyTagsInput', { nullable: true })
    findManyTagsInput?: FindManyTagsInput,
  ) {
    return this.tagService.findMany(findManyTagsInput);
  }

  @Query(() => Tag)
  tag(@Args('id', { type: () => ID }) id: string) {
    return this.tagService.findOne(id);
  }

  @Mutation(() => Tag)
  createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagService.create(createTagInput);
  }

  @Mutation(() => Tag)
  updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return this.tagService.update(updateTagInput.id, updateTagInput);
  }

  @Mutation(() => Tag)
  deleteTag(@Args('id', { type: () => ID }) id: string) {
    return this.tagService.delete(id);
  }
}
