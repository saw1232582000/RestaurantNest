import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';

export class UpdateOrderStatusResponse {
  @ApiProperty()
  result: string;
}

export class UpdateOrderStatusResponseSchema extends BaseResponseSchema<UpdateOrderStatusResponse> {
  @ApiProperty({ type: UpdateOrderStatusResponse })
  public data: UpdateOrderStatusResponse;
}
