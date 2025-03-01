// import { BaseFilterSchema } from 'src/core/common/schema/BaseFilterSchema';

// export class ProductFilter extends BaseFilterSchema {
//   name?: string;
//   category?: string;
//   constructor(category: string, name: string, take: number, skip: number) {
//     super(take, skip);
//     this.name = name || '';
//     this.category = category || '';
//   }
// }

// src/product/dto/product-filter.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductFilterDto {
  @ApiProperty({ required: false, example: 'Pizza' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false, example: 'Food' })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ required: false, example: 10 })
  @IsNumber()
  @IsOptional()
  take?: number;

  @ApiProperty({ required: false, example: 0 })
  @IsNumber()
  @IsOptional()
  skip?: number;

  constructor(data: Partial<ProductFilterDto>) {
    this.name = data.name || '';
    this.category = data.category || '';
    this.take = data.take || 10;
    this.skip = data.skip || 0;
  }
}
