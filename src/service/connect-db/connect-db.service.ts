import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'prisma/src/prisma/client';

@Injectable()
export class ConnectDbService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleInit() {
    this.$connect()
      .then((r) => console.log('Cconnected Databse'))
      .catch((err) => console.log({ err: err }));
  }
  onModuleDestroy() {
    this.$disconnect();
  }
}
