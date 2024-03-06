import { Module } from '@nestjs/common';
import { repo } from 'src/constants/repo';
import { service } from 'src/constants/service';
import { BooksController } from 'src/controllers/books/books.controller';
import { RepoBooksService } from 'src/repo/repo-books/repo-books.service';
import { BooksService } from 'src/service/books/books.service';
import { ConnectDbService } from 'src/service/connect-db/connect-db.service';

@Module({
  controllers: [BooksController],
  providers: [
    {
      provide: repo.book,
      useFactory: function (conDb: ConnectDbService) {
        return new RepoBooksService(conDb);
      },
      inject: [service.connectDb],
    },
    {
      provide: service.book,
      useFactory: function (repo: RepoBooksService) {
        return new BooksService(repo);
      },
      inject: [repo.book],
    },
  ],
})
export class BooksModule {}
