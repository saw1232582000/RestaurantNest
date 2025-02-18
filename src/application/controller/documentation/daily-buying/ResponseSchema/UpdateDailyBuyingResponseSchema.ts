import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';

class UpdateDailyBuyingResponse {
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

export class UpdateDailyBuyingResponseSchema extends BaseResponseSchema<UpdateDailyBuyingResponse> {
  @ApiProperty({ type: UpdateDailyBuyingResponse })
  public data: UpdateDailyBuyingResponse;
}
