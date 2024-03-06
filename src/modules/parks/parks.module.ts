import { Module } from '@nestjs/common';
import { repo } from 'src/constants/repo';
import { service } from 'src/constants/service';
import { ParksController } from 'src/controllers/parks/parks.controller';
import { RepoParksService } from 'src/repo/repo-parks/repo-parks.service';
import { ConnectDbService } from 'src/service/connect-db/connect-db.service';
import { ParksService } from 'src/service/parks/parks.service';

@Module({
  controllers: [ParksController],
  providers: [
    {
      provide: repo.park,
      useFactory: function (conDb: ConnectDbService) {
        return new RepoParksService(conDb);
      },
      inject: [service.connectDb],
    },
    {
      provide: service.park,
      useFactory: function (repo: RepoParksService) {
        return new ParksService(repo);
      },
      inject: [repo.park],
    },
  ],
})
export class ParksModule {}
