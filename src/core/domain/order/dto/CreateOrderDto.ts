import { Expose, plainToInstance } from 'class-transformer';

import { Nullable } from 'src/core/common/type/CommonTypes';
import { OrderEntity } from '../entity/Order';
import { OrderItemEntity } from '../entity/OrderItem';

export class CreateOrderDto {
  @Expose()
  Id: Nullable<string>;

  @Expose()
  userId: string;

  @Expose()
  table: string;

  @Expose()
  status: string;

  @Expose()
  orderItems: OrderItemEntity[];

  @Expose()
  createdDate: Nullable<Date>;

  @Expose()
  updatedDate: Nullable<Date>;

  public static convertToClass(order: OrderEntity) {
    return plainToInstance(CreateOrderDto, order, {
      excludeExtraneousValues: true,
    });
  }
}
