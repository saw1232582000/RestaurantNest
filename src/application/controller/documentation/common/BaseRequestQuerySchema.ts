import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class BaseRequestQuerySchema {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
