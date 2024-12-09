import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { IGetOrderUseCase } from '../port/service-port/IGetOrderUseCase';
export declare class GetOrderUseCase implements IGetOrderUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(id: string): Promise<any>;
}
