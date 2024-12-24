import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { UpdateOrderItemDto } from '../dto/UpdateOrderItemDto';
import { NotificationService } from '@src/core/common/pusher/NotificationService';
import { IUpdateOrderItemUseCase } from '../port/service-port/IUpdateOrderItemUseCase';
export declare class UpdateOrderItemUseCase implements IUpdateOrderItemUseCase {
    private readonly orderRepository;
    private readonly notificationService;
    constructor(orderRepository: IOrderRepository, notificationService: NotificationService);
    execute(data?: UpdateOrderItemDto): Promise<any>;
}
