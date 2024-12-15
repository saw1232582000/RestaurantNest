import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@src/core/common/type/StatusEnum';
import { IsEnum } from 'class-validator';

export class UpdateOrderStatusRequestSchema {
  @ApiProperty({
    enum: Status,
    enumName: 'StatusValue',
  })
  @IsEnum(Status, { message: 'Valid Status value is required' })
  status?: Status;
}
