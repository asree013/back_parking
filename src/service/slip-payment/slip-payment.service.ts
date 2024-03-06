import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';
import { PrismaClient, SlipPayment } from 'prisma/src/prisma/client';

@Injectable()
export class SlipPaymentService extends BaseService<SlipPayment> {
  constructor(repo: IBaseRepo<SlipPayment>) {
    super(repo);
  }

  // onDeleteMany(data: SlipPayment[]){
  //   const db = new PrismaClient()
  //   try {
  //     const id = data.map(r => r.id)
  //     return db.slipPayment.deleteMany({
  //       where: {
  //         id: ids
  //       }
  //     })
  //   } catch (error) {
  //     throw new BadRequestException(error)
  //   }
  // }
}
