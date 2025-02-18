import { Module } from '@nestjs/common';

import { IUserRepository } from 'src/core/domain/user/port/repository-port/IUserRepositoryPort';
import { PrismaUserRepository } from 'src/core/domain/user/repository/PrismaUserRepository';
import { JwtGuard } from '../auth/guard/jwt.guard';

import { GetUserUseCase } from 'src/core/domain/user/service/GetUserUsecase';

import { S3Service } from 'src/core/common/file-upload/UploadS3Service';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { DailyBuyingController } from '../controller/daily-buying.controller';
import { CreateDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/CreateDailyBuyingUseCase';
import { UpdateDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/UpdateDailyBuyingUseCase';
import { GetDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/GetDailyBuyingUseCase';
import {
  GetDailyBuyingListUseCase,
  GetDailyBuyingListWithFilterUseCase,
} from '@src/core/domain/daily-buying/service/GetDailyBuyingListUseCase';
import { IDailyBuyingRepository } from '@src/core/domain/daily-buying/port/repository-port/IDailyBuyingRepository';
import { PrismaDailyBuyingRepository } from '@src/core/domain/daily-buying/repository/PrismaDailyBuyingRepository';

@Module({
  controllers: [DailyBuyingController],
  providers: [
    CreateDailyBuyingUseCase,
    UpdateDailyBuyingUseCase,
    GetDailyBuyingUseCase,
    GetDailyBuyingListUseCase,
    GetDailyBuyingListWithFilterUseCase,
    JwtGuard,
    // PrismaService,
    S3Service,
    {
      provide: IDailyBuyingRepository,
      useClass: PrismaDailyBuyingRepository,
    },
  ],
})
export class DailyBuyingModule {}
