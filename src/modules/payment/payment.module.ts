import { Module } from '@nestjs/common';
import { repo } from 'src/constants/repo';
import { service } from 'src/constants/service';
import { PaymentController } from 'src/controllers/payment/payment.controller';
import { RepoPaymentService } from 'src/repo/repo-payment/repo-payment.service';
import { ConnectDbService } from 'src/service/connect-db/connect-db.service';
import { PaymentService } from 'src/service/payment/payment.service';

@Module({
  controllers: [PaymentController],
  providers: [
    {
      provide: repo.payment,
      useFactory: function (conDb: ConnectDbService) {
        return new RepoPaymentService(conDb);
      },
      inject: [service.connectDb],
    },
    {
      provide: service.paymetn,
      useFactory: (repo: RepoPaymentService) => {
        return new PaymentService(repo);
      },
      inject: [repo.payment],
    },
  ],
})
export class PaymentModule {}
