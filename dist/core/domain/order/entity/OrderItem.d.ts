export declare class OrderItemEntity {
    Id: string;
    orderId: string;
    productId: string;
    status: string;
    quantity: number;
    createdDate: Date;
    constructor(Id: string, productId: string, status: string, quantity: number, orderId?: string, createdDate?: Date);
    static toEntity(orderItem: any): OrderItemEntity;
}
