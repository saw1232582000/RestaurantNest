// src/voucher/voucher.module.ts

import { Module } from '@nestjs/common';
import { VoucherController } from '../controller/voucher.controller';
import {
  CreateVoucherUseCase,
  GetVoucherUseCase,
  UpdateVoucherUseCase,
} from '@src/core/domain/voucher/port/service-port/IVoucherUseCase';
import { VoucherRepository } from '@src/core/domain/voucher/port/repository-port/IVoucherRepository';
import {
  CreateVoucherUseCaseImpl,
  GetVoucherUseCaseImpl,
  UpdateVoucherUseCaseImpl,
} from '@src/core/domain/voucher/service/VoucherUseCase';
import { PrismaVoucherRepository } from '@src/core/domain/voucher/repository/PrismaVoucherRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Module({
  controllers: [VoucherController],
  providers: [
    { provide: CreateVoucherUseCase, useClass: CreateVoucherUseCaseImpl },
    { provide: UpdateVoucherUseCase, useClass: UpdateVoucherUseCaseImpl },
    { provide: GetVoucherUseCase, useClass: GetVoucherUseCaseImpl },
    { provide: VoucherRepository, useClass: PrismaVoucherRepository },
    PrismaService,
    JwtGuard,
  ],
})
export class VoucherModule {}
