import { Test, TestingModule } from '@nestjs/testing';
import { RepoPaymentService } from './repo-payment.service';

describe('RepoPaymentService', () => {
  let service: RepoPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepoPaymentService],
    }).compile();

    service = module.get<RepoPaymentService>(RepoPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
