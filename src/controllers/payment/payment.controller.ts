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
import { Payments } from 'prisma/src/prisma/client';
import { controllers } from 'src/constants/controller';
import { service } from 'src/constants/service';
import { IBaseController } from 'src/interfaces/Ibase_controller';
import { IBaseService } from 'src/interfaces/Ibase_service';
import { PaymentService } from 'src/service/payment/payment.service';

@Controller(controllers.payment)
export class PaymentController implements IBaseController<Payments> {
  constructor(
    @Inject(service.paymetn) private readonly service: PaymentService,
  ) {}
  @Get()
  handlerGetAll(): Promise<Payments[]> {
    return this.service.onFindAll();
  }
  @Get(':id')
  handlerGerById(@Body() id: string): Promise<Payments> {
    return this.service.onFindById(id);
  }
  @Put(':id')
  handlerUpdateById(
    @Param('id') id: string,
    @Body() item: Partial<Payments>,
  ): Promise<Payments> {
    return this.service.onUpdate(id, item);
  }
  @Delete(':id')
  handlerDeleteById(@Param('id') id: string): Promise<Payments> {
    return this.service.onDelete(id);
  }
  @Post()
  handlerCreate(@Body() item: Payments): Promise<Payments> {
    console.log(item);
    
    return this.service.onCreate(item);
  }
  @Post('search')
  handlerSearch(
    @Body() data: Partial<Payments>,
  ): Promise<Payments | Payments[]> {
    return this.service.onSearch(data);
  }
}
