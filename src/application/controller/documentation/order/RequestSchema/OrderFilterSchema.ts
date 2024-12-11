import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseFilterSchema } from '../../common/BaseFilterSchema';
import { Status } from '@src/core/common/type/StatusEnum';
import { IsEnum } from 'class-validator';

export class OrderFilterSchama extends BaseFilterSchema {
  @ApiPropertyOptional()
  startDate?: string;

  @ApiPropertyOptional()
  endDate?: string;

  @ApiPropertyOptional()
  @ApiProperty({
    enum: Status,
    enumName: 'StatusValue',
  })
  @IsEnum(Status, { message: 'Valid Status value is required' })
  status?: Status;
}
