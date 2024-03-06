import { Test, TestingModule } from '@nestjs/testing';
import { RepoParksService } from './repo-parks.service';

describe('RepoParksService', () => {
  let service: RepoParksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepoParksService],
    }).compile();

    service = module.get<RepoParksService>(RepoParksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
