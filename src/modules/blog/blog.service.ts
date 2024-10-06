import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/createBlog.input';
import { UpdateBlogInput } from './dto/updateBlog.input';
import { BaseService } from '../base/base.service';
import { FindManyBlogsInput } from './dto/findManyBlog.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Blog } from './entities/blog.entity';

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
}
