import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategy/jwt.strategy';
import { GithubStrategy } from './strategy/github.strategy';
import { GoogleStrategy } from './strategy/google.strategy';
import { UserModule } from '../modules/user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        publicKey: configService.get<string>('JWT_PUBLIC_KEY_PATH'),
        privateKey: configService.get<string>('JWT_PRIVATE_KEY_PATH'),
        signOptions: {
          algorithm: 'RS256',
        },
      }),
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    // GithubStrategy,
    // GoogleStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
