import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }
  validate(username: string, password: string) {
    console.log('strategy.validate');
    const jsonWebToken = this.authService.validateUser({
      username,
      password,
    });
    if (!jsonWebToken) throw new UnauthorizedException();
    return jsonWebToken;
  }
}
