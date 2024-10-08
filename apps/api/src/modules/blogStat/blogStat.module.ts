import { Module } from '@nestjs/common';
import { BlogStatService } from './blogStat.service';
import { BlogStatResolver } from './blogStat.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BlogModule } from '../blog/blog.module';

@Module({
  imports: [PrismaModule, BlogModule],
  providers: [BlogStatResolver, BlogStatService],
  exports: [BlogStatService],
})
export class BlogStatModule {}
