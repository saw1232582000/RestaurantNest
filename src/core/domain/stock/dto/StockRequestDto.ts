// src/stock/dto/create-stock.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStockDto {
  @ApiProperty({
    description: 'Product ID',
    example: 'cuid303',
    required: false,
  })
  @IsString()
  @IsOptional()
  productId?: string;

  @ApiProperty({
    description: 'Ingredient ID',
    example: 'cuid202',
    required: false,
  })
  @IsString()
  @IsOptional()
  ingredientId?: string;

  @ApiProperty({ description: 'Quantity', example: 100 })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ description: 'Unit', example: 'kg' })
  @IsString()
  @IsNotEmpty()
  unit: string;

  @ApiProperty({ description: 'Threshold', example: 10, required: false })
  @IsNumber()
  @IsOptional()
  threshold?: number;

  constructor(data: Partial<CreateStockDto>) {
    this.productId = data.productId;
    this.ingredientId = data.ingredientId;
    this.quantity = data.quantity || 0;
    this.unit = data.unit || '';
    this.threshold = data.threshold;
  }
}

export class UpdateStockDto {
  @ApiProperty({ description: 'Stock ID', example: 'cuid404' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Product ID',
    example: 'cuid303',
    required: false,
  })
  @IsString()
  @IsOptional()
  productId?: string;

  @ApiProperty({
    description: 'Ingredient ID',
    example: 'cuid202',
    required: false,
  })
  @IsString()
  @IsOptional()
  ingredientId?: string;

  @ApiProperty({ description: 'Quantity', example: 100 })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ description: 'Unit', example: 'kg' })
  @IsString()
  @IsNotEmpty()
  unit: string;

  @ApiProperty({ description: 'Threshold', example: 10, required: false })
  @IsNumber()
  @IsOptional()
  threshold?: number;

  constructor(data: Partial<UpdateStockDto>) {
    this.id = data.id || '';
    this.productId = data.productId;
    this.ingredientId = data.ingredientId;
    this.quantity = data.quantity || 0;
    this.unit = data.unit || '';
    this.threshold = data.threshold;
  }
}
