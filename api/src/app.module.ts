import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscussionsModule } from './discussions/discussions.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 替换为你所用数据库类型
      host: 'mysql_db',
      port: 3307, // 替换为你的远程数据库端口
      entities: [],
      // keep the same with docker-compose.prod.yml
      database: 'nestjs_docker_mysql',
      username: 'testuser',
      password: 'testuser123',
      synchronize: true,
    }),
    DiscussionsModule,
    CoursesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
