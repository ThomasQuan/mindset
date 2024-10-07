import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/createBlog.input';
import { UpdateBlogInput } from './dto/updateBlog.input';
import { BaseService } from '../base/base.service';
import { FindManyBlogsInput } from './dto/findManyBlog.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogStat, Content, Tag, User } from '@prisma/client';
import { Blog } from 'src/@generated/prisma-nestjs-graphql/blog/blog.model';

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

  async create(data: CreateBlogInput): Promise<Blog> {
    console.log(data);
    return {} as Blog;
  }

  async getAuthor(id: string): Promise<User> {
    const blog = await this.prisma.blog.findUnique({
      where: { id },
      select: { author: true },
    });
    return blog?.author;
  }

  async getContents(blogId: string): Promise<Content[]> {
    const blog = await this.prisma.blog.findUnique({
      where: { id: blogId },
      select: { contents: true },
    });
    return blog?.contents;
  }

  async getBlogStat(id: string): Promise<BlogStat> {
    const blog = await this.prisma.blog.findUnique({
      where: { id },
      select: { blogStat: true },
    });
    return blog?.blogStat;
  }

  async getTags(id: string): Promise<Tag[]> {
    const blog = await this.prisma.blog.findUnique({
      where: { id },
      select: { tags: true },
    });
    return blog?.tags;
  }
}
