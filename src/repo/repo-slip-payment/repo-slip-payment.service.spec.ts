import { Test, TestingModule } from '@nestjs/testing';
import { RepoSlipPaymentService } from './repo-slip-payment.service';

describe('RepoSlipPaymentService', () => {
  let service: RepoSlipPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepoSlipPaymentService],
    }).compile();

    service = module.get<RepoSlipPaymentService>(RepoSlipPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
