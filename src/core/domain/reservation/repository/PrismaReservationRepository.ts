import { Injectable } from '@nestjs/common';

import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ReservationRepository } from '../port/repository-port/IReservationRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { ReservationEntity } from '../entity/Reservation';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class PrismaReservationRepository implements ReservationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: ReservationEntity): Promise<ReservationEntity> {
    try {
      const result = await this.prisma.reservation.create({
        data: { ...entity },
      });
      return new ReservationEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot create reservation');
    }
  }

  async update(entity: ReservationEntity): Promise<ReservationEntity> {
    try {
      const result = await this.prisma.reservation.update({
        where: { id: entity.id },
        data: { ...entity, updatedDate: new Date() },
      });
      return new ReservationEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot update reservation');
    }
  }

  async find(by: { id?: string }): Promise<ReservationEntity | null> {
    try {
      const result = await this.prisma.reservation.findFirst({ where: by });
      return result ? new ReservationEntity(result) : null;
    } catch (e) {
      this.handlePrismaError(e, 'Cannot find reservation');
    }
  }

  private handlePrismaError(error: unknown, message: string): never {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new BadRequestException(`${message}: ${error.message}`);
    }
    throw new InternalServerErrorException('An unexpected error occurred');
  }
}
