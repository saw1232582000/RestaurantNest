// src/stock/dto/stock-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { StockEntity } from '../entity/Stock';

@Exclude()
export class StockResponseDto {
  @ApiProperty({ example: 'cuid404' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Salt' })
  @Expose()
  ingredientName: string;

  @ApiProperty({ example: 100 })
  @Expose()
  quantity: number;

  @ApiProperty({ example: 'kg' })
  @Expose()
  unit: string;

  @ApiProperty({ example: 10 })
  @Expose()
  threshold?: number;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  createdDate: Date;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  updatedDate: Date;

  static fromEntity(entity: StockEntity): StockResponseDto {
    return {
      id: entity.id,
      ingredientName: entity.ingredientName,
      quantity: entity.quantity,
      unit: entity.unit,
      threshold: entity.threshold,
      createdDate: entity.createdDate,
      updatedDate: entity.updatedDate,
    };
  }
}

@Exclude()
export class StockListResponseDto {
  @ApiProperty({ type: [StockResponseDto] })
  @Expose()
  items: StockResponseDto[];

  @ApiProperty({ example: 10 })
  @Expose()
  total: number;

  static fromEntities(entities: StockEntity[]): StockListResponseDto {
    return {
      items: entities.map((entity) => StockResponseDto.fromEntity(entity)),
      total: entities.length,
    };
  }
}
