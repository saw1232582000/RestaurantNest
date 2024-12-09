import { CreateorderUseCase } from 'src/core/domain/order/service/CreateOrderUseCase';
import { GetOrderUseCase } from 'src/core/domain/order/service/GetOrderUseCase';
import { GetOrderListWithFilterUseCase } from 'src/core/domain/order/service/GetOrderListUseCase';
import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';
import { CreateOrderRequestSchema } from './documentation/order/RequestSchema/CreateOrderRequestSchema';
import { OrderFilterSchama } from './documentation/order/RequestSchema/OrderFilterSchema';
export declare class OrderController {
    private createOrderUseCase;
    private getOrderUseCase;
    private getOrderListUseCase;
    constructor(createOrderUseCase: CreateorderUseCase, getOrderUseCase: GetOrderUseCase, getOrderListUseCase: GetOrderListWithFilterUseCase);
    createOrder(order: CreateOrderRequestSchema, req: any): Promise<CoreApiResonseSchema<{
        message: string;
    }>>;
    getOrder(req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<any>>;
    getOrderList(params: OrderFilterSchama, req: any): Promise<CoreApiResonseSchema<any>>;
}
