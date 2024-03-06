import { Inject, Injectable } from '@nestjs/common';
import { Payments, PrismaClient } from 'prisma/src/prisma/client';
import { service } from 'src/constants/service';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';

@Injectable()
export class RepoPaymentService implements IBaseRepo<Payments> {
  constructor(@Inject(service.connectDb) private readonly db: PrismaClient) {}
  findAll(): Promise<Payments[]> {
    try {
      return this.db.payments.findMany({
        orderBy: {
          create_date: 'desc'
        }
      });
    } catch (error) {
      throw error;
    }
  }
  findById(id: string): Promise<Payments> {
    try {
      return this.db.payments.findFirst({
        where: {
          id: id,
        },
        include: {
          slipPayment: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  create(item: Payments): Promise<Payments> {
    try {
      return this.db.payments.create({ data: item });
    } catch (error) {
      throw error;
    }
  }
  update(id: string, item: Partial<Payments>): Promise<Payments> {
    try {
      return this.db.payments.update({
        where: {
          id: id,
        },
        data: item,
      });
    } catch (error) {
      throw error;
    }
  }
  delete(id: string): Promise<Payments> {
    try {
      return this.db.payments.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  search(data: Partial<Payments>): Promise<Payments | Payments[]> {
    try {
      return this.db.payments.findMany({
        where: {
          OR: [
            { create_date: data.create_date },
            { id: data.id },
            { count: data.count },
            { status_payment: data.status_payment },
            {
              create_date: {
                gt: data.create_date,
                lt: data.update_date,
              },
            },
          ],
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
