import { IGetOrderListUseCase } from '../port/service-port/IGetOrderListUseCase';
import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { OrderFilter } from '../dto/OrderFilter';
export declare class GetOrderListWithFilterUseCase implements IGetOrderListUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(filter: OrderFilter): Promise<any>;
}
