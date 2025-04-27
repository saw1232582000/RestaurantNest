import { PrismaClient } from '@prisma/client';

import {
  BadRequestException,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';

import { CoreApiResponseSchema } from 'src/core/common/schema/ApiResponseSchema';

import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { OrderEntity } from '../entity/Order';
import { OrderFilter } from '../dto/OrderFilter';
import { Status } from '@src/core/common/type/StatusEnum';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { UpdateOrderStatusDto } from '../dto/UpdateOrderStatusDto';
import { UpdateOrderItemDto } from '../dto/UpdateOrderItemDto';

export class PrismaOrderRepository implements IOrderRepository {
  constructor(@Inject() public readonly prisma: PrismaService) {}

  async create(order: OrderEntity): Promise<OrderEntity> {
    try {
      const result = await this.prisma.order.create({
        data: {
          table: order.table,
          userId: order.userId,
          status: Status.PROCESSING,
          orderItems: {
            createMany: {
              data: order.orderItems.map((orderItem) => {
                return {
                  productId: orderItem.productId,
                  quantity: orderItem.quantity,
                  status: Status.PROCESSING,
                };
              }),
            },
          },
        },
      });
      return OrderEntity.toEntity(result);
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code == 'P2002') {
          throw new BadRequestException(
            CoreApiResponseSchema.error(
              HttpStatus.BAD_REQUEST,
              'Bad Request',
              'Email already used',
            ),
          );
        } else {
          throw new BadRequestException('Bad Request', {
            cause: new Error(),
            description: 'Cannot create order',
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
  async update(order: OrderEntity): Promise<OrderEntity> {
    try {
      const result = await this.prisma.order.update({
        where: { Id: order.Id },
        data: {
          table: order.table,
          // userId: '',
        },
      });
      return OrderEntity.toEntity(result);
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

  async updateOrderStatus(
    updateOrderStatusDto: UpdateOrderStatusDto,
  ): Promise<Boolean> {
    try {
      // console.log(updateOrderStatusDto);
      const result = await this.prisma.order.update({
        where: { Id: updateOrderStatusDto.id },
        data: { status: updateOrderStatusDto.status },
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

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.order.delete({
        where: { Id: id },
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
  async find(by: {
    id?: string;
    email?: string;
    name?: string;
  }): Promise<OrderEntity | null> {
    try {
      const order = await this.prisma.order.findFirst({
        where: {
          Id: by.id,
        },
        include: {
          orderItems: {
            include: {
              product: {
                include: {},
              },
            },
          },
        },
      });

      if (order) return OrderEntity.toEntity(order);
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
  async findAll(): Promise<OrderEntity[]> {
    const orders = await this.prisma.order.findMany({});

    return orders.map((order) => OrderEntity.toEntity(order));
  }

  async findAllWithSchema(filter: OrderFilter): Promise<{
    orders: OrderEntity[];
    totalCounts: number;
    totalPrice: number;
  }> {
    // Dynamically build the where clause
    const whereClause: any = {};

    if (filter.status) {
      whereClause.status = filter.status; // Use exact match for status enum
    }

    // Add date filtering if start or end date is provided
    if (filter.startDate || filter.endDate) {
      whereClause.createdDate = {};
      if (filter.startDate) {
        // Assumes startDate is already set to 00:00:00 in controller
        whereClause.createdDate.gte = filter.startDate;
      }
      if (filter.endDate) {
        // Assumes endDate is already set to 23:59:59 in controller
        whereClause.createdDate.lte = filter.endDate;
      }
    }
    // If neither date is provided, no date filter is applied (fetches all dates)

    const totalCounts = await this.prisma.order.count({
      where: whereClause, // Use the dynamically built where clause
    });

    const priceList = await this.prisma.order.findMany({
      where: whereClause, // Use the dynamically built where clause
      select: {
        orderItems: {
          select: {
            quantity: true,
            product: {
              select: {
                price: true,
              },
            },
          },
        },
      },
    });

    const totalPrice = priceList.reduce((previous, current) => {
      // Calculate the total for this order's items
      const orderTotal = current.orderItems.reduce((sum, item) => {
        return sum + item.quantity * item.product.price;
      }, 0);

      // Add this order's total to the running total
      return previous + orderTotal;
    }, 0);

    const products = await this.prisma.order.findMany({
      where: whereClause, // Use the dynamically built where clause
      take: filter.take,
      skip: filter.skip,
      include: {
        orderItems: {
          include: {
            product: {
              include: {},
            },
          },
        },
      },
    });

    return {
      orders: products.map((product) => OrderEntity.toEntity(product)),
      totalCounts: totalCounts,
      totalPrice: totalPrice,
    };
  }

  async updateOrderItems(
    updateOrderItemDto: UpdateOrderItemDto,
  ): Promise<Boolean> {
    try {
      const targetOrder = await this.prisma.order.findFirst({
        where: {
          Id: updateOrderItemDto.Id,
        },
        include: {
          orderItems: true,
        },
      });
      if (!targetOrder) {
        throw new NotFoundException('Order not found');
      }

      // Get IDs of items in the update request
      const updatedItemIds = updateOrderItemDto.orderItems
        .filter((item) => item.Id)
        .map((item) => item.Id);

      // Find items to delete (items in DB but not in the update request)
      const itemsToDelete = targetOrder.orderItems.filter(
        (item) => !updatedItemIds.includes(item.Id),
      );

      // Delete items that are not in the update request
      if (itemsToDelete.length > 0) {
        await this.prisma.orderItem.deleteMany({
          where: {
            Id: {
              in: itemsToDelete.map((item) => item.Id),
            },
          },
        });
      }

      // Update existing items and create new ones
      for (const orderItem of updateOrderItemDto.orderItems) {
        if (
          targetOrder.orderItems.find((item) => item.Id === orderItem.Id) !==
          undefined
        ) {
          await this.prisma.orderItem.update({
            where: { Id: orderItem.Id },
            data: {
              quantity: orderItem.quantity,
            },
          });
        } else {
          // console.log('create new order item');
          await this.prisma.orderItem.create({
            data: {
              orderId: targetOrder.Id,
              productId: orderItem.productId,
              quantity: orderItem.quantity,
              status: Status.PROCESSING,
            },
          });
        }
      }
      return true;
    } catch (e) {
      if (e instanceof PrismaClientValidationError) {
        throw new InternalServerErrorException('Something bad happened', {
          cause: new Error(),
          description: e.message,
        });
      } else {
        throw new InternalServerErrorException(
          'Something bad happened in nest',
          {
            cause: new Error(),
            description: 'handled error:' + e?.code,
          },
        );
      }
    }
  }
}
