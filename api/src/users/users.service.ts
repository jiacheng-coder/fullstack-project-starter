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
        user_id: 1,
        user_name: 'user1',
        user_password: 'password1',
        email: 'user1@example.com',
      },
      {
        user_id: 2,
        user_name: 'user2',
        user_password: 'password2',
        email: 'user2@example.com',
      },
      {
        user_id: 3,
        user_name: 'user3',
        user_password: 'password3',
        email: 'user3@example.com',
      },
      {
        user_id: 4,
        user_name: 'user4',
        user_password: 'password4',
        email: 'user4@example.com',
      },
      {
        user_id: 5,
        user_name: 'user5',
        user_password: 'password5',
        email: 'user5@example.com',
      },
      {
        user_id: 6,
        user_name: 'user6',
        user_password: 'password6',
        email: 'user6@example.com',
      },
      {
        user_id: 7,
        user_name: 'user7',
        user_password: 'password7',
        email: 'user7@example.com',
      },
      {
        user_id: 8,
        user_name: 'user8',
        user_password: 'password8',
        email: 'user8@example.com',
      },
      {
        user_id: 9,
        user_name: 'user9',
        user_password: 'password9',
        email: 'user9@example.com',
      },
      {
        user_id: 10,
        user_name: 'user10',
        user_password: 'password10',
        email: 'user10@example.com',
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
