import { Injectable } from '@nestjs/common';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  StockFilter,
  StockRepository,
} from '../port/repository-port/IStockRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { StockEntity } from '../entity/Stock';

@Injectable()
export class PrismaStockRepository implements StockRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: StockEntity): Promise<StockEntity> {
    try {
      const result = await this.prisma.stock.create({
        data: {
          // id: entity.id,
          ingredientName: entity.ingredientName,
          quantity: entity.quantity,
          unit: entity.unit,
          threshold: entity.threshold,
          createdDate: entity.createdDate,
          updatedDate: entity.updatedDate,
        },
      });
      return new StockEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot create stock');
    }
  }

  async update(entity: StockEntity): Promise<StockEntity> {
    try {
      const result = await this.prisma.stock.update({
        where: { id: entity.id },
        data: { ...entity, updatedDate: new Date() },
      });
      return new StockEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot update stock');
    }
  }

  async find(by: { id?: string }): Promise<StockEntity | null> {
    try {
      const result = await this.prisma.stock.findFirst({ where: by });
      return result ? new StockEntity(result) : null;
    } catch (e) {
      this.handlePrismaError(e, 'Cannot find stock');
    }
  }

  async findAll(filter?: StockFilter): Promise<StockEntity[]> {
    try {
      const where: any = {};

      if (filter?.ingredientName) {
        where.ingredientName = {
          contains: filter.ingredientName,
          mode: 'insensitive',
        };
      }

      if (filter?.unit) {
        where.unit = {
          equals: filter.unit,
          mode: 'insensitive',
        };
      }

      let results = await this.prisma.stock.findMany({
        where,
        orderBy: { ingredientName: 'asc' },
      });

      // Filter for below threshold items if requested
      if (filter?.belowThreshold) {
        results = results.filter(
          (stock) =>
            stock.threshold !== null && stock.quantity < stock.threshold,
        );
      }

      return results.map((result) => new StockEntity(result));
    } catch (e) {
      this.handlePrismaError(e, 'Cannot find stocks');
    }
  }

  private handlePrismaError(error: unknown, message: string): never {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002')
        throw new BadRequestException(`${message}: Unique constraint failed`);
      throw new BadRequestException(`${message}: ${error.message}`);
    }
    throw new InternalServerErrorException('An unexpected error occurred');
  }
}
