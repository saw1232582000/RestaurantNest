import { ICreateOrderUseCase } from '../port/service-port/ICreateOrderUseCase';
import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { CreateOrderDto } from '../dto/CreateOrderDto';
import { NotificationService } from '@src/core/common/pusher/NotificationService';
export declare class CreateorderUseCase implements ICreateOrderUseCase {
    private readonly orderRepository;
    private readonly notificationService;
    constructor(orderRepository: IOrderRepository, notificationService: NotificationService);
    execute(data?: CreateOrderDto): Promise<any>;
}
