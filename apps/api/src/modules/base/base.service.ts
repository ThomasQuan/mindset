import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { slugify } from 'src/utils/string/slugify';
import 'reflect-metadata';

@Injectable()
export class BaseService<T, CreateInput, UpdateInput, FindManyInput> {
  constructor(
    protected readonly prisma: PrismaService,
    private readonly modelName: string,
    private readonly entityType: new () => T,
  ) {}

  async findMany(params: FindManyInput = {} as FindManyInput): Promise<T[]> {
    const { skip, take, cursor, where, orderBy } = params as any;
    return this.prisma[this.modelName].findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(id: string): Promise<T | null> {
    return this.prisma[this.modelName].findUnique({
      where: { id },
    });
  }

  async create(data: CreateInput): Promise<T> {
    const processedData = this.processSlug(data);

    return this.prisma[this.modelName].create({
      data: processedData,
    });
  }

  async update(id: string, data: UpdateInput): Promise<T> {
    return this.prisma[this.modelName].update({
      where: { id },
      data: data,
    });
  }

  async delete(id: string): Promise<T> {
    return this.prisma[this.modelName].delete({
      where: { id },
    });
  }

  private processSlug(data: any) {
    const slugFields = Reflect.getMetadata('slugFields', this.entityType) || [];

    for (const { property, source } of slugFields) {
      if (data[source]) {
        data[property] = slugify(data[source]);
      }
    }

    return data;
  }
}
