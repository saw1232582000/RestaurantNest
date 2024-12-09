import { BaseResponseSchema } from '../../common/BaseResponseSchema';
import { OrderResponse } from './GetOrderResponseSchema';
declare class OrderListresponse {
    orders: OrderResponse[];
    totalCount: number;
}
export declare class GetOrderListResponseSchema extends BaseResponseSchema<OrderListresponse> {
    data: OrderListresponse;
}
export {};
