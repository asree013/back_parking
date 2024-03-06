import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PrismaClient, Users } from 'prisma/src/prisma/client';
import { service } from 'src/constants/service';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RepoUsersService implements IBaseRepo<Users> {
  constructor(@Inject(service.connectDb) private readonly Db: PrismaClient) {}
  search(data: Partial<Users>) {
    try {
      return this.Db.users.findMany({
        where: {
          OR: [
            { firstname: data.firstname },
            { lastname: data.lastname },
            { role: data.role },
          ],
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<Users[]> {
    try {
      return this.Db.users.findMany({});
    } catch (error) {
      throw error;
    }
  }
  findById(id: string): Promise<Users | any> {
    try {
      return this.Db.users.findFirst({
        where: { id: id },
        // include: {
        //   bookings: true,
        // },
        select: {
          address: true,
          email: true,
          firstname: true,
          idCard: true,
          image_user: true,
          lastname: true,
          role: true,
          phone: true,
        }
      });

    } catch (error) {
      throw error;
    }
  }
  async create(data: Users): Promise<Users> {
    try {
      const hashPassword = bcrypt.hashSync(data.password, 10);

      const create = {} as Users;
      create.username = data.username;
      create.password = hashPassword;
      create.firstname = data.firstname;
      create.lastname = data.lastname;
      create.email = data.email;
      create.address = data.email;
      create.image_user = data.email;

      const result = await this.Db.users.create({
        data: create,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  update(id: string, item: Partial<Users>): Promise<Users> {
    try {
      return this.Db.users.update({
        where: {
          id: id,
        },
        data: item,
      });
    } catch (error) {
      throw error;
    }
  }
  delete(id: string): Promise<Users> {
    try {
      return this.Db.users.delete({ where: { id: id } });
    } catch (error) {
      throw error;
    }
  }
}
