import { Inject, Injectable } from '@nestjs/common';
import { Bookings, PrismaClient } from 'prisma/src/prisma/client/edge';
import { service } from 'src/constants/service';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';

@Injectable()
export class RepoBooksService implements IBaseRepo<Bookings> {
  constructor(@Inject(service.connectDb) private readonly db: PrismaClient) {}
  search(data: Partial<Bookings>): Promise<Bookings[]> {
    try {
      return this.db.bookings.findMany({
        where: {
          OR: [
            { booking_by: data.booking_by },
            { detail: data.detail },
            { parking_id: data.parking_id },
            { status: data.status },
            { created_by: data.created_by },
            {
              create_date: {
                gte: data.create_date,
                lte: data.update_date,
              },
            },
          ],
        },
        include: {
          user_created: true,
          parkings: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  findAll(): Promise<Bookings[]> {
    try {
      return this.db.bookings.findMany({
        include: {
          parkings:true,
          payments: {
            include: {
              slipPayment: {
                orderBy: {
                  create_date: 'asc'
                }
              }
            }
          },
          user_created: true
        },
        orderBy: {
          create_date: 'desc'
        }
      });
    } catch (error) {
      throw error;
    }
  }
  findById(id: string): Promise<Bookings> {
    try {
      return this.db.bookings.findFirst({ where: { id: id } });
    } catch (error) {
      throw error;
    }
  }
  create(item: Bookings): Promise<Bookings> {
    const data = {} as Bookings
    data.booking_by = item.booking_by
    data.detail = item.detail
    data.end_date = new Date(item.end_date)
    data.start_date = new Date(item.start_date)
    data.parking_id = item.parking_id
    data.created_by = item.created_by

    console.log(data);
    
    try {
      return this.db.bookings.create({ data: data });
    } catch (error) {
      throw error;
    }
  }
  update(id: string, item: Partial<Bookings>): Promise<Bookings> {
    try {
      return this.db.bookings.update({
        where: {
          id: id,
        },
        data: item,
      });
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<Bookings> {
    
    try {
      const result = await this.db.bookings.delete({
        where: {
          id: id
        }
      })
      return result
    } catch (error) {
      throw error;
    }
  }
}
