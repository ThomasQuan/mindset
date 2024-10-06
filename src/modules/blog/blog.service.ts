import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/createBlog.input';
import { UpdateBlogInput } from './dto/updateBlog.input';
import { BaseService } from '../base/base.service';
import { FindManyBlogsInput } from './dto/findManyBlog.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Blog } from './entities/blog.entity';
import { Content, User } from '@prisma/client';

@Injectable()
export class BlogService extends BaseService<
  Blog,
  CreateBlogInput,
  UpdateBlogInput,
  FindManyBlogsInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'blog', Blog);
  }

  async getAuthor(authorId: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: authorId } });
  }

  async getContents(blogId: string): Promise<Content[]> {
    return this.prisma.content.findMany({
      where: { blogId },
      orderBy: { orderNo: 'asc', title: 'asc', updatedAt: 'desc' },
    });
  }
}
