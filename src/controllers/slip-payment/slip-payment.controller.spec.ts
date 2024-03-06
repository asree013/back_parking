import { Test, TestingModule } from '@nestjs/testing';
import { SlipPaymentController } from './slip-payment.controller';

describe('SlipPaymentController', () => {
  let controller: SlipPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlipPaymentController],
    }).compile();

    controller = module.get<SlipPaymentController>(SlipPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
