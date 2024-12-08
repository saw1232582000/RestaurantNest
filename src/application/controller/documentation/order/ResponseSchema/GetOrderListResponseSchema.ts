import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';
import { OrderResponse } from './GetOrderResponseSchema';

class OrderListresponse {
  @ApiProperty({ type: [OrderResponse] })
  orders: OrderResponse[];

  @ApiProperty()
  totalCount: number;
}

export class GetOrderListResponseSchema extends BaseResponseSchema<OrderListresponse> {
  @ApiProperty({ type: OrderListresponse })
  public data: OrderListresponse;
}
