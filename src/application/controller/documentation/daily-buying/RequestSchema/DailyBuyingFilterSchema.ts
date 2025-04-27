import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseFilterSchema } from '../../common/BaseFilterSchema';
import { IsOptional, IsString } from 'class-validator';

export class DailyBuyingFilterSchama extends BaseFilterSchema {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  particular?: string;

  @ApiPropertyOptional({
    description: 'Filter by date (YYYY-MM-DD)',
    example: '2024-07-28',
  })
  @IsOptional()
  @IsString() // Validate as string initially, parse in controller
  date?: string;
}
