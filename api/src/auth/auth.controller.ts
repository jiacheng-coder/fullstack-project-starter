import { Controller, Post, UseGuards, Get, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request, @Res() res: Response) {
    res
      .cookie('Authorization', req.user, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({
        msg: 'Login successful!',
      });
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('controller status', req.user);
  }
}
