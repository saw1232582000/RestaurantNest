import { Nullable } from 'src/core/common/type/CommonTypes';
import { OrderEntity } from '../entity/Order';
import { OrderItemEntity } from '../entity/OrderItem';
export declare class UpdateOrderItemDto {
    Id: Nullable<string>;
    table: string;
    status: string;
    orderItems: OrderItemEntity[];
    createdDate: Nullable<Date>;
    updatedDate: Nullable<Date>;
    static convertToClass(order: OrderEntity): UpdateOrderItemDto;
}
