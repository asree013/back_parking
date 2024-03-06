import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Users } from 'prisma/src/prisma/client';
import { controllers } from 'src/constants/controller';
import { service } from 'src/constants/service';
import { IBaseController } from 'src/interfaces/Ibase_controller';
import { JwtAuthGuards } from 'src/service/users/jwt/jwt-auth.guards';
import { LocalAuthGuards } from 'src/service/users/local/local-autorize.guards';
import { UsersService } from 'src/service/users/users.service';

@Controller(controllers.user)
export class UsersController implements IBaseController<Users> {
  constructor(@Inject(service.users) private readonly service: UsersService) {}
  @UseGuards(LocalAuthGuards)
  @Post('login')
  handlerLogin(@Req() req: any) {
    return req.user
  }
  @UseGuards(JwtAuthGuards)
  @Get("jwt")
  handlerJwtAuth(@Req() req: any) {
    return req.user
  } 
  @Post('search')
  handlerSearch(@Body() data: Partial<Users>) {
    return this.service.onSearch(data);
  }
  @Post()
  handlerCreate(@Body() item: Users): Promise<Users> {
    return this.service.onCreate(item);
  }
  @Get()
  handlerGetAll(): Promise<Users[]> {
    return this.service.onFindAll();
  }
  @Get(':id')
  handlerGerById(@Param('id') id: string): Promise<Users> {
    return this.service.onFindById(id);
  }
  @Post('username')
  handlerGerByUsername(@Body('id') username: string): Promise<Users> {
    return this.service.onFindByUsername(username);
  }
  @Delete(':id')
  handlerDeleteById(@Param('id') id: string): Promise<Users> {
    return this.service.onDelete(id);
  }
  @Put(':id')
  handlerUpdateById(@Param('id') id: string,@Body() item: Partial<Users>,): Promise<Users> {
    console.log('update');
    return this.service.onUpdate(id, item);
  }
}
