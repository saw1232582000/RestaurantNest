import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseFilterSchema } from '../../common/BaseFilterSchema';

export class DailyBuyingFilterSchama extends BaseFilterSchema {
  @ApiPropertyOptional()
  particular?: string;
}
