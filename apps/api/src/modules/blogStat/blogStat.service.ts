import { Injectable } from '@nestjs/common';
import { CreateBlogStatInput } from './dto/createBlogStat.input';
import { UpdateBlogStatInput } from './dto/updateBlogStat.input';
import { BaseService } from '../base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindManyBlogStatsInput } from './dto/findManyBlogStat.input';
import { Blog as BlogPrisma } from '@prisma/client';
import { BlogStat } from 'src/@generated/prisma-nestjs-graphql/blog-stat/blog-stat.model';
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

  async getBlog(id: string): Promise<BlogPrisma> {
    const blogStat = await this.prisma.blogStat.findFirst({
      where: {
        id,
      },
      include: {
        blog: true,
      },
    });
    return blogStat?.blog;
  }
}
