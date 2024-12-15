import { UpdateOrderStatusDto } from '@src/core/domain/order/dto/UpdateOrderStatusDto';
import { IUpdateOrderStatusUseCase } from '../port/service-port/IUpdateOrderStatusUseCase';
import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { Inject } from '@nestjs/common';

export class UpdateOrderStatusUseCase implements IUpdateOrderStatusUseCase {
  constructor(@Inject() private readonly orderRepository: IOrderRepository) {}

  public async execute(updateOrderStatusDto: UpdateOrderStatusDto) {
    try {
      await this.orderRepository.updateOrderStatus(updateOrderStatusDto);
      return { result: 'Order status updated successfully' };
    } catch (error) {
      return { result: 'Order status update failed' };
    }
  }
}
