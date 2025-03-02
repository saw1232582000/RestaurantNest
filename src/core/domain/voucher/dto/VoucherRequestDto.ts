// src/voucher/dto/create-voucher.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVoucherDto {
  @ApiProperty({ description: 'Voucher code', example: 'SAVE10' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: 'Discount amount', example: 10.0 })
  @IsNumber()
  @IsNotEmpty()
  discount: number;

  @ApiProperty({
    description: 'Expiry date',
    example: '2025-12-31T00:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  expiryDate: string;

  @ApiProperty({ description: 'Active status', example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  constructor(data: Partial<CreateVoucherDto>) {
    this.code = data.code || '';
    this.discount = data.discount || 0;
    this.expiryDate = data.expiryDate || '';
    this.isActive = data.isActive ?? true;
  }
}

export class UpdateVoucherDto {
  @ApiProperty({ description: 'Voucher ID', example: 'cuid789' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ description: 'Voucher code', example: 'SAVE10' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: 'Discount amount', example: 10.0 })
  @IsNumber()
  @IsNotEmpty()
  discount: number;

  @ApiProperty({
    description: 'Expiry date',
    example: '2025-12-31T00:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  expiryDate: string;

  @ApiProperty({ description: 'Active status', example: true })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  constructor(data: Partial<UpdateVoucherDto>) {
    this.id = data.id || '';
    this.code = data.code || '';
    this.discount = data.discount || 0;
    this.expiryDate = data.expiryDate || '';
    this.isActive = data.isActive ?? true;
  }
}
