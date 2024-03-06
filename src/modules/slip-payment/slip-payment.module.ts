import { Module, forwardRef } from '@nestjs/common';
import { repo } from 'src/constants/repo';
import { service } from 'src/constants/service';
import { SlipPaymentController } from 'src/controllers/slip-payment/slip-payment.controller';
import { RepoSlipPaymentService } from 'src/repo/repo-slip-payment/repo-slip-payment.service';
import { ConnectDbService } from 'src/service/connect-db/connect-db.service';
import { SlipPaymentService } from 'src/service/slip-payment/slip-payment.service';

@Module({
  controllers: [SlipPaymentController],
  providers: [
    {
      provide: repo.slipPayment,
      useFactory: function (conDb: ConnectDbService) {
        return new RepoSlipPaymentService(conDb);
      },
      inject: [service.connectDb],
    },
    {
      provide: service.slipPayment,
      useFactory: function (repo: RepoSlipPaymentService) {
        return new SlipPaymentService(repo);
      },
      inject: [repo.slipPayment],
    },
  ],
})
export class SlipPaymentModule {}
