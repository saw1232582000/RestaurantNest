// src/stock-log/dto/create-stock-log.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStockLogDto {
  @ApiProperty({ description: 'Stock ID', example: 'cuid404' })
  @IsString()
  @IsNotEmpty()
  stockId: string;

  @ApiProperty({ description: 'Quantity change', example: 10 })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ description: 'Reason', example: 'Restock' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  constructor(data: Partial<CreateStockLogDto>) {
    this.stockId = data.stockId || '';
    this.quantity = data.quantity || 0;
    this.reason = data.reason || '';
  }
}
