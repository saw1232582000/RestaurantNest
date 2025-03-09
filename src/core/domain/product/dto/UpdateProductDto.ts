// import { Expose, plainToInstance } from 'class-transformer';

// import { ProductEntity } from '../entity/Product';
// import { Nullable } from 'src/core/common/type/CommonTypes';

// export class UpdateProductDto {
//   @Expose()
//   id: Nullable<string>;

//   @Expose()
//   userId: string;

//   @Expose()
//   name: string;

//   @Expose()
//   price: number;

//   @Expose()
//   image: string;

//   @Expose()
//   description: string;

//   @Expose()
//   category: string;

//   @Expose()
//   createdDate: Nullable<Date>;

//   @Expose()
//   updatedDate: Nullable<Date>;

//   public static convertToClass(product: ProductEntity) {
//     return plainToInstance(UpdateProductDto, product, {
//       excludeExtraneousValues: true,
//     });
//   }
// }

// src/product/dto/update-product.dto.ts
// src/product/dto/update-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ description: 'Product ID', example: 'cuid123' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ description: 'Product name', example: 'Pizza' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Product image URL',
    example: 'https://example.com/pizza.jpg',
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ description: 'Product price', example: 10 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Product description',
    example: 'Delicious cheese pizza',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Product category', example: 'Food' })
  @IsString()
  @IsNotEmpty()
  category: string;

  userId?: string; // Hidden, injected from auth

  constructor(data: Partial<UpdateProductDto>) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.image = data.image || '';
    this.price = data.price || 0;
    this.description = data.description || '';
    this.category = data.category || '';
    this.userId = data.userId;
  }
}
