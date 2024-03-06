import { Inject, Injectable } from '@nestjs/common';
import { Parks, PrismaClient } from 'prisma/src/prisma/client';
import { service } from 'src/constants/service';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';

@Injectable()
export class RepoParksService implements IBaseRepo<Parks> {
  constructor(@Inject(service.connectDb) private readonly db: PrismaClient) {}
  search(data: Partial<Parks>): Promise<Parks | Parks[]> {
    try {
      return this.db.parks.findMany({
        where: {
          OR: [{ active: data.active }, { name_park: data.name_park }],
        },
      });
    } catch (error) {
      throw error;
    }
  }
  findAll(): Promise<Parks[]> {
    try {
    return this.db.parks.findMany({
      orderBy: {
        create_date: 'desc'
      }
    });
    } catch (error) {
      throw error;
    }
  }
  findById(id: string): Promise<Parks> {
    try {
      return this.db.parks.findFirst({
        where: { id: id },
        include: {
          bookings: true,
        },
      });
    } catch (err) {
      throw err;
    }
  }
  create(item: Parks): Promise<Parks> {
    console.log(item);
    
    try {
      return this.db.parks.create({ data: item });
    } catch (err) {
      throw err;
    }
  }
  update(id: string, item: Partial<Parks>): Promise<Parks> {
    try {
      return this.db.parks.update({
        where: {
          id: id,
        },
        data: item,
      });
    } catch (err) {
      throw err;
    }
  }
  delete(id: string): Promise<Parks> {
    try {
      return this.db.parks.delete({
        where: {
          id: id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}
