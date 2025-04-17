import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class OrderItemRequest {
  // @ApiProperty()
  // orderId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;
}

export class CreateOrderRequestSchema {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  table: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({ type: [OrderItemRequest] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemRequest)
  orderItems: OrderItemRequest[];
}
