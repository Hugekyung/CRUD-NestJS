import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';

@Controller('user')
export class UserController {
  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(JwtGuard) // using custom guard
  @Get('me')
  getMe(@Req() req: Request) {
    return req.user;
  }
}
