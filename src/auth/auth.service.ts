import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
    delete user.hash; // user객체에서 비밀번호 정보 삭제

    return user; // json 형식으로 응답한다
  }

  signin() {
    return { message: 'Sign In !' }; // json 형식으로 응답한다
  }
}
