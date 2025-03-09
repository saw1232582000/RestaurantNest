import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class BaseFilterSchema {
  @ApiProperty({ required: false, example: 10 })
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber({}, { message: 'take must be a number' })
  @IsOptional()
  take?: number;

  @ApiProperty({ required: false, example: 0 })
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber({}, { message: 'skip must be a number' })
  @IsOptional()
  skip?: number;
}
