// src/bill/dto/bill-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BillEntity } from '../entity/Bill';

@Exclude()
export class BillResponseDto {
  @ApiProperty({ example: 'cuid456' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'cuid123' })
  @Expose()
  orderId: string;

  @ApiProperty({ example: 100.0 })
  @Expose()
  totalAmount: number;

  @ApiProperty({ example: 10.0 })
  @Expose()
  tax?: number;

  @ApiProperty({ example: 5.0 })
  @Expose()
  discount?: number;

  @ApiProperty({ example: 105.0 })
  @Expose()
  finalAmount: number;

  @ApiProperty({ example: 'Pending' })
  @Expose()
  status: string;

  @ApiProperty({ example: 'Card' })
  @Expose()
  paymentMethod?: string;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  createdDate: Date;

  static fromEntity(entity: BillEntity): BillResponseDto {
    return {
      id: entity.id,
      orderId: entity.orderId,
      totalAmount: entity.totalAmount,
      tax: entity.tax,
      discount: entity.discount,
      finalAmount: entity.finalAmount,
      status: entity.status,
      paymentMethod: entity.paymentMethod,
      createdDate: entity.createdDate,
    };
  }
}
