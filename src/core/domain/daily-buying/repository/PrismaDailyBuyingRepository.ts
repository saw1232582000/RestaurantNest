import { PrismaClient } from '@prisma/client';

import {
  BadRequestException,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';

import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';

import { DailyBuyingEntity } from '../entity/DailyBuying';
import { DailyBuyingFilter } from '../dto/DailyBuyingFilter';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';

export class PrismaDailyBuyingRepository implements IDailyBuyingRepository {
  constructor(@Inject() public readonly prisma: PrismaService) {}

  async create(dailyBuying: DailyBuyingEntity): Promise<DailyBuyingEntity> {
    try {
      const result = await this.prisma.dailyBuying.create({
        data: {
          particular: dailyBuying.particular,
          unit: dailyBuying.unit,
          quantity: dailyBuying.quantity,
          Amount: dailyBuying.Amount,
          price: dailyBuying.price,
        },
        // data:{
        //     ...DailyBuying
        // }
      });
      return DailyBuyingEntity.toEntity(result);
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code == 'P2002') {
          throw new BadRequestException(
            CoreApiResonseSchema.error(
              HttpStatus.BAD_REQUEST,
              'Bad Request',
              'Email already used',
            ),
          );
        } else {
          throw new BadRequestException('Bad Request', {
            cause: new Error(),
            description: 'Cannot create DailyBuying',
          });
        }
      }
      if (e instanceof PrismaClientValidationError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.message,
        });
      }
    }
  }
  async createMany(dailyBuyings: DailyBuyingEntity[]): Promise<string> {
    try {
      await this.prisma.dailyBuying.createMany({
        data: dailyBuyings.map((db) => {
          return {
            particular: db.particular,
            unit: db.unit,
            quantity: db.quantity,
            Amount: db.Amount,
            price: db.price,
          };
        }),
      });
      return 'Daily buyings created successfully';
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code == 'P2002') {
          throw new BadRequestException(
            CoreApiResonseSchema.error(
              HttpStatus.BAD_REQUEST,
              'Bad Request',
              'Email already used',
            ),
          );
        } else {
          throw new BadRequestException('Bad Request', {
            cause: new Error(),
            description: 'Cannot create DailyBuying',
          });
        }
      }
      if (e instanceof PrismaClientValidationError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.message,
        });
      }
    }
  }
  async update(dailyBuying: DailyBuyingEntity): Promise<DailyBuyingEntity> {
    try {
      console.log(dailyBuying);
      const result = await this.prisma.dailyBuying.update({
        where: { Id: dailyBuying.Id },
        data: {
          particular: dailyBuying.particular,
          unit: dailyBuying.unit,
          quantity: dailyBuying.quantity,
          price: dailyBuying.price,
          Amount: dailyBuying.Amount,
          updatedDate: new Date(),
        },
      });
      return DailyBuyingEntity.toEntity(result);
    } catch (e) {
      if (e instanceof PrismaClientValidationError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.message,
        });
      }
      if (e instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.code,
        });
      }
    }
  }
  async delete(Id: string): Promise<boolean> {
    try {
      await this.prisma.dailyBuying.delete({
        where: { Id: Id },
      });
      return true;
    } catch (e) {
      if (e instanceof PrismaClientValidationError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.message,
        });
      }
      if (e instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.code,
        });
      }
    }
  }
  async find(by: { Id?: string }): Promise<DailyBuyingEntity | null> {
    try {
      const dailyBuying = await this.prisma.dailyBuying.findFirst({
        where: {
          ...by,
        },
      });

      if (dailyBuying) return DailyBuyingEntity.toEntity(dailyBuying);
      else return null;
    } catch (e) {
      if (e instanceof PrismaClientValidationError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.message,
        });
      }
      if (e instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.code,
        });
      }
    }
  }
  async findAll(): Promise<DailyBuyingEntity[]> {
    const dailyBuyings = await this.prisma.dailyBuying.findMany({});

    return dailyBuyings.map((DailyBuying) =>
      DailyBuyingEntity.toEntity(DailyBuying),
    );
  }

  async findAllWithSchema(
    filter: DailyBuyingFilter,
  ): Promise<{ DailyBuyings: DailyBuyingEntity[]; totalCounts: number }> {
    // console.log(filter)
    const totalCounts = await this.prisma.dailyBuying.count({
      where: {
        particular: { contains: filter.particular },
      },
    });
    const dailyBuyings = await this.prisma.dailyBuying.findMany({
      where: {
        particular: { contains: filter.particular },
      },
      take: filter.take,
      skip: filter.skip,
    });
    // console.log(DailyBuyings)

    return {
      DailyBuyings: dailyBuyings.map((DailyBuying) =>
        DailyBuyingEntity.toEntity(DailyBuying),
      ),
      totalCounts: totalCounts,
    };
  }
}
