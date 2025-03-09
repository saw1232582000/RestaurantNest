// src/stock-log/repository/prisma-stock-log.repository.ts
import { Injectable } from '@nestjs/common';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { StockLogRepository } from '../port/repository-port/IStockLogRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { StockLogEntity } from '../entity/StockLog';

@Injectable()
export class PrismaStockLogRepository implements StockLogRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: StockLogEntity): Promise<StockLogEntity> {
    try {
      const result = await this.prisma.stockLog.create({ data: { ...entity } });
      return new StockLogEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot create stock log');
    }
  }

  async find(by: { id?: string }): Promise<StockLogEntity | null> {
    try {
      const result = await this.prisma.stockLog.findFirst({ where: by });
      return result ? new StockLogEntity(result) : null;
    } catch (e) {
      this.handlePrismaError(e, 'Cannot find stock log');
    }
  }

  private handlePrismaError(error: unknown, message: string): never {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new BadRequestException(`${message}: ${error.message}`);
    }
    throw new InternalServerErrorException('An unexpected error occurred');
  }
}
