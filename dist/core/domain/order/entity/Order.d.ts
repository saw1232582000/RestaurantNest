import { OrderItemEntity } from './OrderItem';
export declare class OrderEntity {
    Id: string;
    userId: string;
    table: string;
    status: string;
    createdDate: Date;
    updatedDate: Date;
    orderItems: OrderItemEntity[];
    constructor(Id: string, userId: string, table: string, status: string, orderItems: OrderItemEntity[], createdDate?: Date, updatedDate?: Date);
    static toEntity(order: any): OrderEntity;
}
