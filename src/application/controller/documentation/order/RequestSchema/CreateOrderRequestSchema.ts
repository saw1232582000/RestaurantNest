import { ApiProperty } from '@nestjs/swagger';

export class OrderItemRequest {
  // @ApiProperty()
  // orderId: string;

  @ApiProperty()
  productId: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  quantity: number;
}

export class CreateOrderRequestSchema {
  @ApiProperty()
  table: string;

  @ApiProperty()
  status: string;

  @ApiProperty({ type: [OrderItemRequest] })
  orderItems: OrderItemRequest[];
}
