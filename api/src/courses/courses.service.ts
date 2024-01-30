import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  findAll(): Array<CreateCourseDto> {
    // 对数据库进行操作,拿到数据
    return [
      {
        course_id: '123',
        course_name: 'test',
      },
      {
        course_id: '123',
        course_name: 'test123',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
