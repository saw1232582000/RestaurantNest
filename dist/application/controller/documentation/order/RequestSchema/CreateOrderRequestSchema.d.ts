export declare class OrderItemRequest {
    productId: string;
    status: string;
    quantity: number;
}
export declare class CreateOrderRequestSchema {
    table: string;
    status: string;
    orderItems: OrderItemRequest[];
}
