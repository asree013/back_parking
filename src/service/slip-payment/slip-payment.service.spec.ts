import { Test, TestingModule } from '@nestjs/testing';
import { SlipPaymentService } from './slip-payment.service';

describe('SlipPaymentService', () => {
  let service: SlipPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlipPaymentService],
    }).compile();

    service = module.get<SlipPaymentService>(SlipPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
