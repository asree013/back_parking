import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users.service';
import { service } from 'src/constants/service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(service.users) private readonly userService: UsersService, private jwt: JwtService
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const data = {
      username: username,
      password: password,
    };
    const user = await this.userService.validateUser(data);
    if (!user) {
      throw new UnauthorizedException({
        message: 'username หรือ password ผิด',
      });
    }
    // return user
    const payload = { sub: user.id, username: user.username }
    return {
      access_token: await this.jwt.signAsync(payload),
    }
  }
}
