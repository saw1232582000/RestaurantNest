// src/bill/bill.module.ts
import { Module } from '@nestjs/common';
import { BillController } from '../controller/bill.controller';
import {
  CreateBillUseCase,
  GetBillUseCase,
  UpdateBillUseCase,
} from '@src/core/domain/bill/port/service-port/IBillUseCase';
import {
  CreateBillUseCaseImpl,
  GetBillUseCaseImpl,
  UpdateBillUseCaseImpl,
} from '@src/core/domain/bill/service/BillUseCase';
import { BillRepository } from '@src/core/domain/bill/port/repository-port/IBillRepository';
import { PrismaBillRepository } from '@src/core/domain/bill/repository/PrismaBillRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Module({
  controllers: [BillController],
  providers: [
    { provide: CreateBillUseCase, useClass: CreateBillUseCaseImpl },
    { provide: UpdateBillUseCase, useClass: UpdateBillUseCaseImpl },
    { provide: GetBillUseCase, useClass: GetBillUseCaseImpl },
    { provide: BillRepository, useClass: PrismaBillRepository },
    PrismaService,
    JwtGuard,
  ],
})
export class BillModule {}
