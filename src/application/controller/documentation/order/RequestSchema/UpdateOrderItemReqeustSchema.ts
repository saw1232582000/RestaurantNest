import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

class UpdateOrderItemRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;
}

export class UpdateOrderItemRequestSchema {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  table: string;

  @ApiProperty({ type: [UpdateOrderItemRequest] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateOrderItemRequest)
  orderItems: UpdateOrderItemRequest[];
}
