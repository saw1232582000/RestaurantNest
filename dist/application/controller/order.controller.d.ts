import { CreateorderUseCase } from 'src/core/domain/order/service/CreateOrderUseCase';
import { GetOrderUseCase } from 'src/core/domain/order/service/GetOrderUseCase';
import { GetOrderListWithFilterUseCase } from 'src/core/domain/order/service/GetOrderListUseCase';
import { CoreApiResponseSchema } from 'src/core/common/schema/ApiResponseSchema';
import { CreateOrderRequestSchema } from './documentation/order/RequestSchema/CreateOrderRequestSchema';
import { BaseRequestQuerySchema } from './documentation/common/BaseRequestQuerySchema';
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
    createOrder(order: CreateOrderRequestSchema, req: any): Promise<CoreApiResponseSchema<unknown>>;
    update(order: UpdateOrderStatusRequestSchema, req: any, params: BaseRequestQuerySchema): Promise<CoreApiResponseSchema<{
        result: string;
    }>>;
    updateOrderItems(order: UpdateOrderItemRequestSchema, req: any, params: BaseRequestQuerySchema): Promise<CoreApiResponseSchema<any>>;
    getOrder(req: any, params: BaseRequestQuerySchema): Promise<CoreApiResponseSchema<any>>;
    getOrderList(params: OrderFilterSchama, req: any): Promise<CoreApiResponseSchema<any>>;
}
