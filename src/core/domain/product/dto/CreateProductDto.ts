// import { Expose, plainToInstance } from 'class-transformer';

// import { ProductEntity } from '../entity/Product';
// import { Nullable } from 'src/core/common/type/CommonTypes';

// export class CreateProductDto {
//   @Expose()
//   id: Nullable<string>;

//   @Expose()
//   userId: string;

//   @Expose()
//   name: string;

//   @Expose()
//   image: string;

//   @Expose()
//   price: number;

//   @Expose()
//   description: string;

//   @Expose()
//   category: string;

//   @Expose()
//   createdDate: Nullable<Date>;

//   @Expose()
//   updatedDate: Nullable<Date>;

//   public static convertToClass(product: ProductEntity) {
//     return plainToInstance(CreateProductDto, product, {
//       excludeExtraneousValues: true,
//     });
//   }
// }

// src/product/dto/create-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
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
}
