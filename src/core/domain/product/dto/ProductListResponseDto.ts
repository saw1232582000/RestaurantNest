// src/product/dto/product-list-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '../entity/Product';
import { ProductResponseDto } from './ProductResponseDto';

export class ProductListResponseDto {
  @ApiProperty({ type: [ProductResponseDto] })
  products: ProductResponseDto[];

  @ApiProperty({ example: 100 })
  totalCounts: number;

  static fromEntities(
    products: ProductEntity[],
    totalCounts: number,
  ): ProductListResponseDto {
    return {
      products: products.map(ProductResponseDto.fromEntity),
      totalCounts,
    };
  }
}
