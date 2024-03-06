import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Payments } from 'prisma/src/prisma/client';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';

@Injectable()
export class PaymentService extends BaseService<Payments> {
  constructor(repo: IBaseRepo<Payments>) {
    super(repo);
  }
}
