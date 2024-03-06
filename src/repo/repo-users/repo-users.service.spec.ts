import { Test, TestingModule } from '@nestjs/testing';
import { RepoUsersService } from './repo-users.service';

describe('RepoUsersService', () => {
  let service: RepoUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepoUsersService],
    }).compile();

    service = module.get<RepoUsersService>(RepoUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
