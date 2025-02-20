import { CreateorderUseCase } from 'src/core/domain/order/service/CreateOrderUseCase';
import { GetOrderUseCase } from 'src/core/domain/order/service/GetOrderUseCase';
import { GetOrderListWithFilterUseCase } from 'src/core/domain/order/service/GetOrderListUseCase';
import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';
import { CreateOrderRequestSchema } from './documentation/order/RequestSchema/CreateOrderRequestSchema';
import { OrderFilterSchama } from './documentation/order/RequestSchema/OrderFilterSchema';
import { UpdateOrderStatusRequestSchema } from './documentation/order/RequestSchema/UpdateOrderStatusRequestSchema';
import { UpdateOrderStatusUseCase } from '@src/core/domain/order/service/UpdateOrderStatusUseCase';
import { UpdateOrderItemRequestSchema } from './documentation/order/RequestSchema/UpdateOrderItemReqeustSchema';
import { UpdateOrderItemUseCase } from '@src/core/domain/order/service/UpdateOrderItemUseCase';
export declare class OrderController {
    private createOrderUseCase;
    private getOrderUseCase;
    private getOrderListUseCase;
    private updateOrderStatusUseCase;
    private updateOrderItemUseCase;
    constructor(createOrderUseCase: CreateorderUseCase, getOrderUseCase: GetOrderUseCase, getOrderListUseCase: GetOrderListWithFilterUseCase, updateOrderStatusUseCase: UpdateOrderStatusUseCase, updateOrderItemUseCase: UpdateOrderItemUseCase);
    createOrder(order: CreateOrderRequestSchema, req: any): Promise<CoreApiResonseSchema<unknown>>;
    update(order: UpdateOrderStatusRequestSchema, req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<{
        result: string;
    }>>;
    updateOrderItems(order: UpdateOrderItemRequestSchema, req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<any>>;
    getOrder(req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<any>>;
    getOrderList(params: OrderFilterSchama, req: any): Promise<CoreApiResonseSchema<any>>;
}
