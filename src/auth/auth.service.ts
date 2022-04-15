import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { message: 'Sign Up !' }; // json 형식으로 응답한다
  }

  signin() {
    return { message: 'Sign In !' }; // json 형식으로 응답한다
  }
}
