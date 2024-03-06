import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient, Users } from 'prisma/src/prisma/client';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';
import { BaseService } from '../base/base.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService extends BaseService<Users> {
  constructor(repo: IBaseRepo<Users>,private jwt: JwtService ) {
    super(repo);
  }
  async onFindByUsername(username: string): Promise<Users | undefined> {
    try {
      const db = new PrismaClient();
      const user = db.users.findFirst({
        where: {
          username: username,
        },
      });

      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async validateUser(data: {username: string ,password: string;}): Promise<any> {
    const user = await this.onFindByUsername(data.username);

    if (user && (await bcrypt.compare(data.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

}
