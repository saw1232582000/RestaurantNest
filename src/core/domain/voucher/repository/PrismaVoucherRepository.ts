// src/voucher/repository/prisma-voucher.repository.ts
import { Injectable } from '@nestjs/common';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { VoucherRepository } from '../port/repository-port/IVoucherRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { VoucherEntity } from '../entity/Voucher';

@Injectable()
export class PrismaVoucherRepository implements VoucherRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: VoucherEntity): Promise<VoucherEntity> {
    try {
      const result = await this.prisma.voucher.create({ data: { ...entity } });
      return new VoucherEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot create voucher');
    }
  }

  async update(entity: VoucherEntity): Promise<VoucherEntity> {
    try {
      const result = await this.prisma.voucher.update({
        where: { id: entity.id },
        data: { ...entity },
      });
      return new VoucherEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot update voucher');
    }
  }

  async find(by: {
    id?: string;
    code?: string;
  }): Promise<VoucherEntity | null> {
    try {
      const result = await this.prisma.voucher.findFirst({ where: by });
      return result ? new VoucherEntity(result) : null;
    } catch (e) {
      this.handlePrismaError(e, 'Cannot find voucher');
    }
  }

  private handlePrismaError(error: unknown, message: string): never {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002')
        throw new BadRequestException(`${message}: Code already exists`);
      throw new BadRequestException(`${message}: ${error.message}`);
    }
    throw new InternalServerErrorException('An unexpected error occurred');
  }
}
