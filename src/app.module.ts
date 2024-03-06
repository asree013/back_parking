import { Global, Module } from '@nestjs/common';
import { ConnectDbService } from './service/connect-db/connect-db.service';
import { service } from './constants/service';
import { UsersModule } from './modules/users/users.module';
import { ParksModule } from './modules/parks/parks.module';
import { BooksModule } from './modules/books/books.module';
import { PaymentModule } from './modules/payment/payment.module';
import { SlipPaymentModule } from './modules/slip-payment/slip-payment.module';
import { UploadModule } from './modules/upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Global()
@Module({
  imports: [
    UsersModule,
    ParksModule,
    BooksModule,
    PaymentModule,
    SlipPaymentModule,
    UploadModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/uploads'), // Update the path accordingly
      serveRoot: '/images',
    }),
  ],
  providers: [
    {
      provide: service.connectDb,
      useClass: ConnectDbService,
    },
  ],
  exports: [service.connectDb],
})
export class AppModule {}
