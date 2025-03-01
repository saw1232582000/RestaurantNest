// src/product/dto/product-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ProductEntity } from '../entity/Product';

@Exclude()
export class ProductResponseDto {
  @ApiProperty({ example: 'cuid123' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'user123' })
  @Expose()
  userId: string;

  @ApiProperty({ example: 'Pizza' })
  @Expose()
  name: string;

  @ApiProperty({ example: 10 })
  @Expose()
  price: number;

  @ApiProperty({ example: 'https://example.com/pizza.jpg' })
  @Expose()
  image: string;

  @ApiProperty({ example: 'Delicious cheese pizza' })
  @Expose()
  description: string;

  @ApiProperty({ example: 'Food' })
  @Expose()
  category: string;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  createdDate: Date;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  updatedDate: Date;

  static fromEntity(entity: ProductEntity): ProductResponseDto {
    return {
      id: entity.id,
      userId: entity.userId,
      name: entity.name,
      price: entity.price,
      image: entity.image,
      description: entity.description,
      category: entity.category,
      createdDate: entity.createdDate,
      updatedDate: entity.updatedDate,
    };
  }
}
