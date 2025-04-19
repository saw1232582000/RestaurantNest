declare class UpdateOrderItemRequest {
    Id?: string;
    productId: string;
    quantity: number;
}
export declare class UpdateOrderItemRequestSchema {
    table: string;
    orderItems: UpdateOrderItemRequest[];
}
export {};
