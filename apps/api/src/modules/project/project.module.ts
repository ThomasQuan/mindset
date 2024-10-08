import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TagModule } from '../tag/tag.module';
import { ContentModule } from '../content/content.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, TagModule, ContentModule, UserModule],
  providers: [ProjectResolver, ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
