import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class DailyBuying {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  particular: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  unit: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  Amount: number;
}

export class CreateManyDailyBuyingSchema {
  @ApiProperty({ type: [DailyBuying] })
  DailyBuyings: DailyBuying[];
}
