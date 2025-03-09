// src/voucher/dto/voucher-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { VoucherEntity } from '../entity/Voucher';

@Exclude()
export class VoucherResponseDto {
  @ApiProperty({ example: 'cuid789' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'SAVE10' })
  @Expose()
  code: string;

  @ApiProperty({ example: 10.0 })
  @Expose()
  discount: number;

  @ApiProperty({ example: '2025-12-31T00:00:00.000Z' })
  @Expose()
  expiryDate: Date;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  createdDate: Date;

  static fromEntity(entity: VoucherEntity): VoucherResponseDto {
    return {
      id: entity.id,
      code: entity.code,
      discount: entity.discount,
      expiryDate: entity.expiryDate,
      isActive: entity.isActive,
      createdDate: entity.createdDate,
    };
  }
}
