// src/stock/dto/create-stock.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStockDto {
  @ApiProperty({
    description: 'Ingredient Name',
    example: 'Salt',
  })
  @IsString()
  @IsNotEmpty()
  ingredientName: string;

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

  // constructor(data: Partial<CreateStockDto>) {
  //   console.log(data);
  //   this.ingredientName = data.ingredientName || '';
  //   this.quantity = data.quantity || 0;
  //   this.unit = data.unit || '';
  //   this.threshold = data.threshold;
  // }
}

export class UpdateStockDto {
  @ApiProperty({ description: 'Stock ID', example: 'cuid404' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Ingredient Name',
    example: 'Salt',
    required: false,
  })
  @IsString()
  @IsOptional()
  ingredientName?: string;

  @ApiProperty({ description: 'Quantity', example: 100, required: false })
  @IsNumber()
  @IsOptional()
  quantity?: number;

  @ApiProperty({ description: 'Unit', example: 'kg', required: false })
  @IsString()
  @IsOptional()
  unit?: string;

  @ApiProperty({ description: 'Threshold', example: 10, required: false })
  @IsNumber()
  @IsOptional()
  threshold?: number;

  constructor(data: Partial<UpdateStockDto>) {
    this.id = data.id || '';
    this.ingredientName = data.ingredientName;
    this.quantity = data.quantity;
    this.unit = data.unit;
    this.threshold = data.threshold;
  }
}

export class GetStockListDto {
  @ApiProperty({
    description: 'Ingredient Name',
    example: 'Salt',
    required: false,
  })
  @IsString()
  @IsOptional()
  ingredientName?: string;

  @ApiProperty({ description: 'Unit', example: 'kg', required: false })
  @IsString()
  @IsOptional()
  unit?: string;

  @ApiProperty({
    description: 'Below Threshold',
    example: true,
    required: false,
  })
  @IsOptional()
  belowThreshold?: boolean;

  constructor(data: Partial<GetStockListDto>) {
    this.ingredientName = data.ingredientName;
    this.unit = data.unit;
    this.belowThreshold = data.belowThreshold;
  }
}
