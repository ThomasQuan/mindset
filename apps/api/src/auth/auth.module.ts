import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserModule } from '../modules/user/user.module';
import { RolesGuard } from './guard/role.guard';
import { GqlAuthGuard } from './gql-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const privateKeyBase64 = configService.get<string>(
          'JWT_PRIVATE_KEY_PATH',
        );
        const publicKeyBase64 = configService.get<string>(
          'JWT_PUBLIC_KEY_PATH',
        );
        const privateKey = Buffer.from(privateKeyBase64, 'base64').toString(
          'utf-8',
        );
        const publicKey = Buffer.from(publicKeyBase64, 'base64').toString(
          'utf-8',
        );
        return {
          privateKey,
          publicKey,
          signOptions: {
            algorithm: 'RS256',
            expiresIn: '10h',
          },
        };
      },
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    RolesGuard,
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    },
    // GithubStrategy,
    // GoogleStrategy,
  ],
  exports: [AuthService, RolesGuard],
})
export class AuthModule {}
