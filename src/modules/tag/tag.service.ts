import { Injectable } from '@nestjs/common';
import { CreateTagInput } from './dto/createTag.input';
import { UpdateTagInput } from './dto/updateTag.input';
import { BaseService } from '../base/base.service';
import { FindManyTagsInput } from './dto/findManyTags.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService extends BaseService<
  Tag,
  CreateTagInput,
  UpdateTagInput,
  FindManyTagsInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'tag', Tag);
  }
}
