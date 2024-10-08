import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/createBlog.input';
import { UpdateBlogInput } from './dto/updateBlog.input';
import { BaseService } from '../base/base.service';
import { FindManyBlogsInput } from './dto/findManyBlog.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogStat, Content, Tag, User } from '@prisma/client';
import { Blog } from 'src/@generated/prisma-nestjs-graphql/blog/blog.model';
import { slugify } from 'src/utils/string/slugify';

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
    let blog = await this.prisma.blog.findUnique({
      where: {
        slug: slugify(data.title),
      },
    });

    if (blog) {
      throw new Error('Blog already exists');
    }

    const createData: any = {
      title: data.title,
      slug: slugify(data.title),
      description: data.description,
      subtitle: data.subtitle,
      authorId: data.authorId,
      status: data.status,
    };

    if (data.contents) {
      createData.contents = {
        connectOrCreate: data.contents.map((content) => ({
          where: { slug: slugify(content.slug) },
          create: {
            slug: slugify(content.slug),
            markdownContent: content.markdownContent,
            htmlContent: content.htmlContent,
            status: content.status,
            orderNo: content.orderNo,
            objectAs: content.objectAs,
          },
        })),
      };
    }

    if (Array.isArray(data.tagIds)) {
      createData.tags =
        data.tagIds.length > 0
          ? { connect: data.tagIds.map((id) => ({ id })) }
          : { set: [] };
    }

    blog = await this.prisma.blog.create({ data: createData });

    return blog;
  }

  async update(id: string, data: UpdateBlogInput): Promise<Blog> {
    const blog = await this.prisma.blog.findUnique({ where: { id } });

    if (!blog) {
      throw new Error(`Blog with id ${id} not found`);
    }

    const updateData: any = {
      title: data.title,
      slug: slugify(data.title),
      description: data.description,
      subtitle: data.subtitle,
      status: data.status,
    };

    if (Array.isArray(data.contents)) {
      if (data.contents.length === 0) {
        updateData.contents = {
          set: [],
        };
      } else {
        updateData.contents = {
          deleteMany: {},
          create: data.contents.map((content) => ({
            slug: content.slug ? slugify(content.slug) : undefined,
            markdownContent: content.markdownContent,
            htmlContent: content.htmlContent,
            status: content.status,
            orderNo: content.orderNo,
            objectAs: content.objectAs,
          })),
        };
      }
    }

    if (Array.isArray(data.tagIds)) {
      updateData.tags = {
        set: data.tagIds.map((id) => ({ id })),
      };
    }

    const updatedBlog = await this.prisma.blog.update({
      where: { id },
      data: updateData,
    });

    return updatedBlog;
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
