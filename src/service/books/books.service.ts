import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Bookings, PrismaClient } from 'prisma/src/prisma/client';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';

@Injectable()
export class BooksService extends BaseService<Bookings> {
  constructor(repo: IBaseRepo<Bookings>) {
    super(repo);
  }
  findByUserId(id: string): Promise<Bookings[]> {
    const db = new PrismaClient();
    try {
      return db.bookings.findMany({
        where: {
          user_created: {
            id: id,
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async findNotItemBooking(data: Bookings) {
    
    try {
      const db = new PrismaClient()
      const result = await db.parks.findMany({
        where: {
          NOT: {
            bookings: {
              some: {
                OR: [
                  {
                    start_date: {
                    lte: new Date(data.start_date)
                    },
                    end_date: {
                      gte: new Date(data.end_date)
                    },
                  },
                  {
                    start_date: {
                       gte: new Date(data.start_date),
                       lte: new Date(data.end_date)
                    }
                  }
                ]
              },
              
            }
          }
        },
      })
      
      return result
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
