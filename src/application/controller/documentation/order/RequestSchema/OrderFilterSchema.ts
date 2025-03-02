import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseFilterSchema } from '../../common/BaseFilterSchema';
import { Status } from '@src/core/common/type/StatusEnum';
import { IsEnum, IsOptional } from 'class-validator';

export class OrderFilterSchama extends BaseFilterSchema {
  @ApiPropertyOptional()
  @IsOptional()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  endDate?: string;

  @ApiPropertyOptional({
    enum: Status,
    enumName: 'StatusValue',
  })
  @IsEnum(Status, { message: 'Valid Status value is required' })
  @IsOptional()
  status?: Status;
}
