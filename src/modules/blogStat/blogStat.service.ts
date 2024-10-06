import { Injectable } from '@nestjs/common';
import { CreateBlogStatInput } from './dto/createBlogStat.input';
import { UpdateBlogStatInput } from './dto/updateBlogStat.input';
import { BaseService } from '../base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindManyBlogStatsInput } from './dto/findManyBlogStat.input';
import { BlogStat } from './entities/blogStat.entity';

@Injectable()
export class BlogStatService extends BaseService<
  BlogStat,
  CreateBlogStatInput,
  UpdateBlogStatInput,
  FindManyBlogStatsInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'blogStat', BlogStat);
  }
}
