/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers: CreateAuthDto[] = [
  {
    username: 'Lucy',
    password: 'lucy123',
  },
  {
    username: 'Bart',
    password: 'bart123',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: CreateAuthDto) {
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) return null;
    if (password === findUser.password) {
      // @ts-ignore
      const { passport, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
