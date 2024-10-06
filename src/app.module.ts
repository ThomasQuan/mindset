import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './modules/role/role.module';
import { BlogModule } from './modules/blog/blog.module';
import { ContentModule } from './modules/content/content.module';
import { ProjectModule } from './modules/project/project.module';
import { TagModule } from './modules/tag/tag.module';
import { AssetModule } from './modules/asset/asset.module';
import { BlogStatModule } from './modules/blogStat/blogStat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    RoleModule,
    BlogModule,
    ContentModule,
    ProjectModule,
    TagModule,
    AssetModule,
    BlogStatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
