import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrismaClient, SlipPayment } from 'prisma/src/prisma/client';
import { controllers } from 'src/constants/controller';
import { service } from 'src/constants/service';
import { IBaseController } from 'src/interfaces/Ibase_controller';
import { SlipPaymentService } from 'src/service/slip-payment/slip-payment.service';

@Controller(controllers.slipPayment)
export class SlipPaymentController implements IBaseController<SlipPayment> {
  constructor(
    @Inject(service.slipPayment) private readonly service: SlipPaymentService,
  ) {}
  @Get()
  handlerGetAll(): Promise<SlipPayment[]> {
    return this.service.onFindAll();
  }
  @Get(':id')
  handlerGerById(@Param('id') id: string): Promise<SlipPayment> {
    return this.service.onFindById(id);
  }
  @Put(':id')
  handlerUpdateById(
    @Param('id') id: string,
    @Body() item: Partial<SlipPayment>,
  ): Promise<SlipPayment> {
    return this.service.onUpdate(id, item);
  }
  @Delete(':id')
  handlerDeleteById(@Param('id') id: string): Promise<SlipPayment> {
    return this.service.onDelete(id);
  }
  @Post()
  handlerCreate(@Body() item: SlipPayment): Promise<SlipPayment> {
    return this.service.onCreate(item);
  }
  @Post('search')
  handlerSearch(
    @Body() data: Partial<SlipPayment>,
  ): Promise<SlipPayment | SlipPayment[]> {
    return this.service.onSearch(data);
  }
}
