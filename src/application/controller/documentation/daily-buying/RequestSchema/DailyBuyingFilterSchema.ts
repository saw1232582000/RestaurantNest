import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseFilterSchema } from '../../common/BaseFilterSchema';
import { IsOptional, IsString } from 'class-validator';

export class DailyBuyingFilterSchama extends BaseFilterSchema {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  particular?: string;
}
