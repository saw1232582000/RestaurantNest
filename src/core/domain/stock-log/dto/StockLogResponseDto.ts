// src/stock-log/dto/stock-log-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { StockLogEntity } from '../entity/StockLog';

@Exclude()
export class StockLogResponseDto {
  @ApiProperty({ example: 'cuid505' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'cuid404' })
  @Expose()
  stockId: string;

  @ApiProperty({ example: 10 })
  @Expose()
  quantity: number;

  @ApiProperty({ example: 'Restock' })
  @Expose()
  reason: string;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  createdDate: Date;

  static fromEntity(entity: StockLogEntity): StockLogResponseDto {
    return {
      id: entity.id,
      stockId: entity.stockId,
      quantity: entity.quantity,
      reason: entity.reason,
      createdDate: entity.createdDate,
    };
  }
}
