// jwt.strategy.ts

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users.service';
import { jwtConfig } from 'src/config/jwt.confing';
import { service } from 'src/constants/service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(service.users) private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return {
        id: payload.sub, username: payload.username
    }
  }
}
