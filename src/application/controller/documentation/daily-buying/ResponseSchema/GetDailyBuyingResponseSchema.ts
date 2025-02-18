import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';

class GetDailyBuyingResponse {
  @ApiProperty()
  Id: string;

  @ApiProperty()
  particular: string;

  @ApiProperty()
  unit: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  Amount: number;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  updatedDate: Date;
}

export class GetDailyBuyingResponseSchema extends BaseResponseSchema<GetDailyBuyingResponse> {
  @ApiProperty({ type: GetDailyBuyingResponse })
  public data: GetDailyBuyingResponse;
}
