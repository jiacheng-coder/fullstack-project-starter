import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// 业务逻辑
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  // CRUD
  findAll() {
    // 从数据库里拿到所有用户的数据 -> MySQL
    return [
      {
        user_id: 'sdfasdf',
        user_name: 'user1',
        user_password: 'password1',
        user_email: 'user1@example.com',
      },
      {
        user_id: 'asdfasfasdf',
        user_name: 'user2',
        user_password: 'password2',
        user_email: 'user2@example.com',
      },
      {
        user_id: 'asfasdfds',
        user_name: 'user3',
        user_password: 'password3',
        user_email: 'user3@example.com',
      },
      {
        user_id: 'sadfasfasf',
        user_name: 'user4',
        user_password: 'password4',
        user_email: 'user4@example.com',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
