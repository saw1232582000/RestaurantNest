import { CreateorderUseCase } from 'src/core/domain/order/service/CreateOrderUseCase';
import { GetOrderUseCase } from 'src/core/domain/order/service/GetOrderUseCase';
import { GetOrderListWithFilterUseCase } from 'src/core/domain/order/service/GetOrderListUseCase';
import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';
import { CreateOrderRequestSchema } from './documentation/order/RequestSchema/CreateOrderRequestSchema';
import { OrderFilterSchama } from './documentation/order/RequestSchema/OrderFilterSchema';
import { UpdateOrderStatusRequestSchema } from './documentation/order/RequestSchema/UpdateOrderStatusRequestSchema';
import { UpdateOrderStatusUseCase } from '@src/core/domain/order/service/UpdateOrderStatusUseCase';
export declare class OrderController {
    private createOrderUseCase;
    private getOrderUseCase;
    private getOrderListUseCase;
    private updateOrderStatusUseCase;
    constructor(createOrderUseCase: CreateorderUseCase, getOrderUseCase: GetOrderUseCase, getOrderListUseCase: GetOrderListWithFilterUseCase, updateOrderStatusUseCase: UpdateOrderStatusUseCase);
    createOrder(order: CreateOrderRequestSchema, req: any): Promise<CoreApiResonseSchema<{
        message: string;
    }>>;
    update(order: UpdateOrderStatusRequestSchema, req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<{
        result: string;
    }>>;
    getOrder(req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<any>>;
    getOrderList(params: OrderFilterSchama, req: any): Promise<CoreApiResonseSchema<any>>;
}
