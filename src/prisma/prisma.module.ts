import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Global 데코레이터를 달면, 다른 모듈에서 imports를 하지 않아도 prisma 모듈에 접근할 수 있다
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 다른 모듈에서 사용할 수 있게 내보내기
})
export class PrismaModule {}
