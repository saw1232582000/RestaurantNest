// src/bill/repository/prisma-bill.repository.ts
import { Injectable } from '@nestjs/common';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { BillRepository } from '../port/repository-port/IBillRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { BillEntity } from '../entity/Bill';

@Injectable()
export class PrismaBillRepository implements BillRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: BillEntity): Promise<BillEntity> {
    try {
      const result = await this.prisma.bill.create({ data: { ...entity } });
      return new BillEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot create bill');
    }
  }

  async update(entity: BillEntity): Promise<BillEntity> {
    try {
      const result = await this.prisma.bill.update({
        where: { id: entity.id },
        data: { ...entity },
      });
      return new BillEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot update bill');
    }
  }

  async find(by: {
    id?: string;
    orderId?: string;
  }): Promise<BillEntity | null> {
    try {
      const result = await this.prisma.bill.findFirst({ where: by });
      return result ? new BillEntity(result) : null;
    } catch (e) {
      this.handlePrismaError(e, 'Cannot find bill');
    }
  }

  private handlePrismaError(error: unknown, message: string): never {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002')
        throw new BadRequestException(`${message}: Order ID already billed`);
      throw new BadRequestException(`${message}: ${error.message}`);
    }
    throw new InternalServerErrorException('An unexpected error occurred');
  }
}
