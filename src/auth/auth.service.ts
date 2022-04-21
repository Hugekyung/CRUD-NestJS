import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      delete user.hash; // user객체에서 비밀번호 정보 삭제
      return user; // json 형식으로 응답한다
    } catch (error) {
      console.log(error);
      if (error.code === 'P2002') {
        throw new ForbiddenException('This Email is already exist.');
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('There is no user that matched');
    }

    const isMatched = await argon.verify(user.hash, dto.password);
    if (!isMatched) {
      throw new ForbiddenException('Doesn`t matched password');
    }

    return this.signToken(user.id, user.email); // json 형식으로 응답한다
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const accessToken = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return { accessToken };
  }
}
