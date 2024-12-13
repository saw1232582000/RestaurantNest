import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ICreateOrderUseCase } from '../port/service-port/ICreateOrderUseCase';
import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { CreateOrderDto } from '../dto/CreateOrderDto';
import { OrderEntity } from '../entity/Order';
import { OrderItemEntity } from '../entity/OrderItem';
import { NotificationService } from '@src/core/common/pusher/NotificationService';

@Injectable()
export class CreateorderUseCase implements ICreateOrderUseCase {
  constructor(
    @Inject()
    private readonly orderRepository: IOrderRepository,
    @Inject()
    private readonly notificationService: NotificationService,
  ) {}

  public async execute(data?: CreateOrderDto): Promise<any> {
    try {
      const newOrder = new OrderEntity(
        undefined,
        data?.userId,
        data?.table,
        data?.status,
        data?.orderItems?.map((orderItem) => {
          return OrderItemEntity.toEntity(orderItem);
        }),
      );

      const createdOrder = await this.orderRepository.create(newOrder);
      await this.notificationService.notifyNewOrder(
        createdOrder.Id,
        createdOrder,
      );

      return CreateOrderDto.convertToClass(createdOrder);
    } catch (error) {
      throw new Error(error);
    }
  }
}
