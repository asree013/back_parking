import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Parks } from 'prisma/src/prisma/client';
import { RepoParksService } from 'src/repo/repo-parks/repo-parks.service';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';

@Injectable()
export class ParksService extends BaseService<Parks> {
  constructor(repo: IBaseRepo<Parks>) {
    super(repo);
  }
}
