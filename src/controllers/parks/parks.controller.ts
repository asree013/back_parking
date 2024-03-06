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
import { Parks } from 'prisma/src/prisma/client';

import { service } from 'src/constants/service';
import { IBaseController } from 'src/interfaces/Ibase_controller';
import { IBaseService } from 'src/interfaces/Ibase_service';
import { ParksService } from 'src/service/parks/parks.service';

@Controller('parks')
export class ParksController implements IBaseController<Parks> {
  constructor(@Inject(service.park) private readonly service: ParksService) {}
  @Post('search')
  handlerSearch(@Body() data: Partial<Parks>): Promise<Parks | Parks[]> {
    return this.service.onSearch(data);
  }
  @Get()
  handlerGetAll(): Promise<Parks[]> {
    return this.service.onFindAll();
  }
  @Get(':id')
  handlerGerById(@Param('id') id: string): Promise<Parks> {
    return this.service.onFindById(id);
  }
  @Put(':id')
  handlerUpdateById(
    @Param('id') id: string,
    @Body() item: Partial<Parks>,
  ): Promise<Parks> {
    return this.service.onUpdate(id, item);
  }
  @Delete(':id')
  handlerDeleteById(@Param('id') id: string): Promise<Parks> {
    return this.service.onDelete(id);
  }
  @Post()
  handlerCreate(@Body() item: Parks): Promise<Parks> {  
    return this.service.onCreate(item);
  }
}
