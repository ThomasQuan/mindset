import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ContentService } from './content.service';
import { Content } from './entities/content.entity';
import { CreateContentInput } from './dto/createContent.input';
import { UpdateContentInput } from './dto/updateContent.input';
import { FindManyContentsInput } from './dto/findManyContents.input';

@Resolver(() => Content)
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Mutation(() => Content)
  createContent(
    @Args('createContentInput') createContentInput: CreateContentInput,
  ) {
    return this.contentService.create(createContentInput);
  }

  @Query(() => [Content], { name: 'content' })
  contents(@Args('params', { nullable: true }) params?: FindManyContentsInput) {
    return this.contentService.findMany(params);
  }

  @Query(() => Content, { name: 'content' })
  content(@Args('id', { type: () => ID }) id: string) {
    return this.contentService.findOne(id);
  }

  @Mutation(() => Content)
  updateContent(
    @Args('updateContentInput') updateContentInput: UpdateContentInput,
  ) {
    return this.contentService.update(
      updateContentInput.id,
      updateContentInput,
    );
  }

  @Mutation(() => Content)
  deleteContent(@Args('id', { type: () => ID }) id: string) {
    return this.contentService.delete(id);
  }
}
