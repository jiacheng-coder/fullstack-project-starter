import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidateCreateUserPipe } from './pipes/validate-create-user.pipe';
import { AuthGuard } from './guards/auth.guard';

// 对 Body，Param 这些请求过来的东西进行二次处理
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(ValidateCreateUserPipe) createUserDto: CreateUserDto) {
    console.log('create in controller', createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    const data = this.usersService.findAll();
    try {
      return {
        status: true,
        msg: 'success',
        data,
      };
    } catch (error) {
      return {
        status: false,
        msg: 'fail',
        error,
      };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
