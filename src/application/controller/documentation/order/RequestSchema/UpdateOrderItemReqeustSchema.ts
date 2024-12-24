import { ApiProperty } from '@nestjs/swagger';
import { OrderItemRequest } from './CreateOrderRequestSchema';

class UpdateOrderItemRequest {
  @ApiProperty()
  Id: string;

  @ApiProperty()
  productId: string;

  @ApiProperty()
  quantity: number;
}

export class UpdateOrderItemRequestSchema {
  @ApiProperty()
  table: string;

  @ApiProperty({ type: [UpdateOrderItemRequest] })
  orderItems: UpdateOrderItemRequest[];
}
