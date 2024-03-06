import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('value', value);
    console.log('metadata', metadata);
    const parseAgeInt = parseInt(value.age.toString());
    if (isNaN(parseAgeInt)) {
      throw new HttpException(
        'Invalid Data Type Property for Age',
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      ...value,
      age: parseAgeInt,
    };
  }
}
