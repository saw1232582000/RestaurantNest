import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { UpdateOrderItemDto } from '../dto/UpdateOrderItemDto';
import { OrderEntity } from '../entity/Order';
import { OrderItemEntity } from '../entity/OrderItem';
import { NotificationService } from '@src/core/common/pusher/NotificationService';
import { IUpdateOrderItemUseCase } from '../port/service-port/IUpdateOrderItemUseCase';

@Injectable()
export class UpdateOrderItemUseCase implements IUpdateOrderItemUseCase {
  constructor(
    @Inject()
    private readonly orderRepository: IOrderRepository,
    @Inject()
    private readonly notificationService: NotificationService,
  ) {}

  public async execute(data?: UpdateOrderItemDto): Promise<any> {
    try {
      const orderToUpdate = new OrderEntity(
        data?.Id,
        '',
        data?.table,
        data?.status,
        data?.orderItems?.map((orderItem) => {
          return OrderItemEntity.toEntity(orderItem);
        }),
      );
      //TODO: notify the order items update to the kitchen
      //   await this.notificationService.notifyNewOrder(
      //     createdOrder.Id,
      //     createdOrder,
      //   );

      return await this.orderRepository.updateOrderItems(orderToUpdate);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
