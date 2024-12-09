import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class ProductResponse {
    id: string;
    userId: string;
    name: string;
    price: number;
    description: string;
    category: string;
    createdDate: Date;
    updateddDate: Date;
}
declare class OrderItemResponse {
    Id: string;
    orderId: string;
    productId: string;
    status: string;
    quantity: number;
    createdDate: string;
    product: ProductResponse;
}
export declare class OrderResponse {
    Id: string;
    userId: string;
    table: string;
    status: string;
    orderItems: OrderItemResponse[];
    createdDate: Date;
    updateddDate: Date;
}
export declare class GetOrderResponseSchema extends BaseResponseSchema<OrderResponse> {
    data: OrderResponse;
}
export {};
