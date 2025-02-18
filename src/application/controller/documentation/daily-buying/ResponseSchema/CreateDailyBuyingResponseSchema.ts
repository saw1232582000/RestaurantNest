import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';

class CreateDailyBuyingResponse {
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

export class CreateDailyBuyingResponseSchema extends BaseResponseSchema<CreateDailyBuyingResponse> {
  @ApiProperty({ type: CreateDailyBuyingResponse })
  public data: CreateDailyBuyingResponse;
}
