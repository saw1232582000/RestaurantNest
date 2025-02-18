import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';

class DailyBuying {
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

class GetDailyBuyingList {
  @ApiProperty({ type: [DailyBuying] })
  DailyBuyings: DailyBuying[];

  @ApiProperty()
  totalCount: number;
}

export class GetDailyBuyingListResponseSchema extends BaseResponseSchema<GetDailyBuyingList> {
  @ApiProperty({ type: GetDailyBuyingList })
  public data: GetDailyBuyingList;
}
