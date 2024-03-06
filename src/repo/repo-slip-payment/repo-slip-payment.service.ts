import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient, SlipPayment } from 'prisma/src/prisma/client';
import { service } from 'src/constants/service';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';

@Injectable()
export class RepoSlipPaymentService implements IBaseRepo<SlipPayment> {
  constructor(@Inject(service.connectDb) private readonly db: PrismaClient) {}
  findAll(): Promise<SlipPayment[]> {
    try {
      return this.db.slipPayment.findMany({
        orderBy: {
          create_date: 'desc'
        }
      });
    } catch (error) {
      throw error;
    }
  }
  findById(id: string): Promise<SlipPayment> {
    try {
      return this.db.slipPayment.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  create(item: SlipPayment): Promise<SlipPayment> {
    try {
      return this.db.slipPayment.create({ data: item });
    } catch (error) {
      throw error;
    }
  }
  update(id: string, item: Partial<SlipPayment>): Promise<SlipPayment> {
    try {
      return this.db.slipPayment.update({
        where: {
          id: id,
        },
        data: item,
      });
    } catch (error) {
      throw error;
    }
  }
  delete(id: string): Promise<SlipPayment> {
    try {
      return this.db.slipPayment.delete({ where: { id: id } });
    } catch (error) {
      throw error;
    }
  }
  search(data: Partial<SlipPayment>): Promise<SlipPayment | SlipPayment[]> {
    try {
      return this.db.slipPayment.findMany({
        where: {
          OR: [
            {
              create_date: {
                gt: data.create_date,
                lt: data.update_date,
              },
            },
            { payment_id: data.payment_id },
          ],
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
