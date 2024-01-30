import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscussionsModule } from './discussions/discussions.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [DiscussionsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
