import { Test, TestingModule } from '@nestjs/testing';
import { RepoBooksService } from './repo-books.service';

describe('RepoBooksService', () => {
  let service: RepoBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepoBooksService],
    }).compile();

    service = module.get<RepoBooksService>(RepoBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
