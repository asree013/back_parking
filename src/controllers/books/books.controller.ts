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
import { Bookings } from 'prisma/src/prisma/client';
import { controllers } from 'src/constants/controller';
import { service } from 'src/constants/service';
import { IBaseController } from 'src/interfaces/Ibase_controller';
import { DateSearch } from 'src/models/date';
import { BooksService } from 'src/service/books/books.service';

@Controller(controllers.book)
export class BooksController implements IBaseController<Bookings> {
  constructor(@Inject(service.book) private readonly service: BooksService) {}
  @Post('search')
  handlerSearch(@Body() data: Partial<Bookings>) {
    return this.service.onSearch(data);
  }
  @Get()
  handlerGetAll(): Promise<Bookings[]> {
    return this.service.onFindAll();
  }
  @Get(':id')
  handlerGerById(@Param('id') id: string): Promise<Bookings> {
    return this.service.onFindById(id);
  }
  @Get('user_id/:id')
  handlerFindByUserId(@Param('id') id: string) {
    return this.service.findByUserId(id);
  }
  @Put(':id')
  handlerUpdateById(
    @Param('id') id: string,
    @Body() item: Partial<Bookings>,
  ): Promise<Bookings> {
    return this.service.onUpdate(id, item);
  }
  @Delete(':id')
  handlerDeleteById(@Param('id') id: string): Promise<Bookings> {
    return this.service.onDelete(id);
  }
  @Post()
  handlerCreate(@Body() item: Bookings): Promise<Bookings> { 
    return this.service.onCreate(item);
  }
  @Post('date')
  handlerFindByDate(@Body() item: Bookings) {
    return this.service.findNotItemBooking(item)
  }

}
