import { Module } from '@nestjs/common';
import { StockController } from '../controller/stock.controller';
import {
  CreateStockUseCase,
  GetStockListUseCase,
  GetStockUseCase,
  UpdateStockUseCase,
} from '@src/core/domain/stock/port/service-port/IStockUseCase';
import { StockRepository } from '@src/core/domain/stock/port/repository-port/IStockRepository';
import {
  CreateStockUseCaseImpl,
  GetStockListUseCaseImpl,
  GetStockUseCaseImpl,
  UpdateStockUseCaseImpl,
} from '@src/core/domain/stock/service/StockUseCase';
import { PrismaStockRepository } from '@src/core/domain/stock/repository/PrismaStockRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Module({
  controllers: [StockController],
  providers: [
    { provide: CreateStockUseCase, useClass: CreateStockUseCaseImpl },
    { provide: UpdateStockUseCase, useClass: UpdateStockUseCaseImpl },
    { provide: GetStockUseCase, useClass: GetStockUseCaseImpl },
    { provide: GetStockListUseCase, useClass: GetStockListUseCaseImpl },
    { provide: StockRepository, useClass: PrismaStockRepository },
    PrismaService,
    JwtGuard,
  ],
})
export class StockModule {}
