import { UpdateOrderStatusDto } from '@src/core/domain/order/dto/UpdateOrderStatusDto';
import { IUpdateOrderStatusUseCase } from '../port/service-port/IUpdateOrderStatusUseCase';
import { IOrderRepository } from '../port/repository-port/IOrderRepository';
export declare class UpdateOrderStatusUseCase implements IUpdateOrderStatusUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(updateOrderStatusDto: UpdateOrderStatusDto): Promise<{
        result: string;
    }>;
}
