import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../modules/user/user.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/user-status.enum';

@Injectable()
export class AuthService {
  private readonly privateKey: string;

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UserService,
  ) {
    this.privateKey = this.configService.get<string>('JWT_PRIVATE_KEY_PATH');
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        algorithm: 'RS256',
        privateKey: this.privateKey,
      }),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  async validateOAuthLogin(profile: any, provider: string) {
    const { email } = profile;
    let user = await this.userService.findByEmail(email);

    if (!user) {
      user = await this.userService.create({
        email,
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        fullName: `${profile.firstName} ${profile.lastName}`,
        password: '', // You might want to generate a random password here
        status: UserStatus.ACTIVE,
        roleId: 'default-role-id', // You'll need to set up a default role
      });
    }

    return this.login(user);
  }
}
