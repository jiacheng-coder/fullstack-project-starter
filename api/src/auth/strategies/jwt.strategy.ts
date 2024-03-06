import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'cqu-math-token-asdfkjskdfj',
    });
  }

  validate(payload: any) {
    console.log('inside jwt strategy', payload);
    // parse the jwt content, and get the actual value, you can see it in https://token.dev/
    return payload;
  }
}
