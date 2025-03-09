// src/bill/dto/create-bill.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBillDto {
  @ApiProperty({ description: 'Order ID', example: 'cuid123' })
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty({
    description: 'Total amount before tax/discount',
    example: 100.0,
  })
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @ApiProperty({ description: 'Tax amount', example: 10.0, required: false })
  @IsNumber()
  @IsOptional()
  tax?: number;

  @ApiProperty({
    description: 'Discount amount',
    example: 5.0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  discount?: number;

  @ApiProperty({
    description: 'Final amount after tax/discount',
    example: 105.0,
  })
  @IsNumber()
  @IsNotEmpty()
  finalAmount: number;

  @ApiProperty({
    description: 'Payment method',
    example: 'Card',
    required: false,
  })
  @IsString()
  @IsOptional()
  paymentMethod?: string;

  constructor(data: Partial<CreateBillDto>) {
    this.orderId = data.orderId || '';
    this.totalAmount = data.totalAmount || 0;
    this.tax = data.tax;
    this.discount = data.discount;
    this.finalAmount = data.finalAmount || 0;
    this.paymentMethod = data.paymentMethod;
  }
}

export class UpdateBillDto {
  @ApiProperty({ description: 'Bill ID', example: 'cuid456' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Total amount before tax/discount',
    example: 100.0,
  })
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @ApiProperty({ description: 'Tax amount', example: 10.0, required: false })
  @IsNumber()
  @IsOptional()
  tax?: number;

  @ApiProperty({
    description: 'Discount amount',
    example: 5.0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  discount?: number;

  @ApiProperty({
    description: 'Final amount after tax/discount',
    example: 105.0,
  })
  @IsNumber()
  @IsNotEmpty()
  finalAmount: number;

  @ApiProperty({
    description: 'Payment method',
    example: 'Card',
    required: false,
  })
  @IsString()
  @IsOptional()
  paymentMethod?: string;

  @ApiProperty({ description: 'Status', example: 'Paid', required: false })
  @IsString()
  @IsOptional()
  status?: string;

  constructor(data: Partial<UpdateBillDto>) {
    this.id = data.id || '';
    this.totalAmount = data.totalAmount || 0;
    this.tax = data.tax;
    this.discount = data.discount;
    this.finalAmount = data.finalAmount || 0;
    this.paymentMethod = data.paymentMethod;
    this.status = data.status;
  }
}
