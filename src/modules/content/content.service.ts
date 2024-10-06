import { Injectable } from '@nestjs/common';
import { CreateContentInput } from './dto/createContent.input';
import { UpdateContentInput } from './dto/updateContent.input';
import { BaseService } from '../base/base.service';
import { FindManyContentsInput } from './dto/findManyContents.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService extends BaseService<
  Content,
  CreateContentInput,
  UpdateContentInput,
  FindManyContentsInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'content', Content);
  }
}
