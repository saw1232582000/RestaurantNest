import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ICreateOrderUseCase } from '../port/service-port/ICreateOrderUseCase';
import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { CreateOrderDto } from '../dto/CreateOrderDto';
import { OrderEntity } from '../entity/Order';
import { OrderItemEntity } from '../entity/OrderItem';
import { ChatGateWay } from 'src/core/common/chat/ChatGateWay';

@Injectable()
export class CreateorderUseCase implements ICreateOrderUseCase {
  constructor(
    @Inject('PrismaOrderRepository')
    private readonly orderRepository: IOrderRepository,
    
    
  ) {}

  public async execute(data?: CreateOrderDto): Promise<any> {
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
    

    return CreateOrderDto.convertToClass(createdOrder);
  }
}
