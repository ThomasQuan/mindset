import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {
    const publicKey = configService.get<string>('JWT_PUBLIC_KEY_PATH');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64').toString('utf-8'),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: payload.email,
      },
      include: {
        role: {
          include: {
            permissions: true,
          },
        },
      },
    });
    return {
      userId: payload.sub,
      email: payload.email,
      permissions: user.role.permissions,
    };
  }
}
