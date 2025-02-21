import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';

class DailyBuying {
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
}

export class CreateManyDailyBuyingSchema {
  @ApiProperty({ type: [DailyBuying] })
  DailyBuyings: DailyBuying[];
}
