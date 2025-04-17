export declare class OrderItemRequest {
    Id?: string;
    productId: string;
    status: string;
    quantity: number;
}
export declare class CreateOrderRequestSchema {
    table: string;
    status?: string;
    orderItems: OrderItemRequest[];
}
