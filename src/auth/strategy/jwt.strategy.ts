import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    const publicKey = configService.get<string>('JWT_PUBLIC_KEY_PATH');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: publicKey,
      algorithms: ['RS256'], // Specify the algorithm
    });

    if (!publicKey) {
      throw new Error('JWT public key is not defined in the configuration');
    }
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
