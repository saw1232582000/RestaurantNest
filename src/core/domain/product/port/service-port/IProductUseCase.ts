// src/product/port/use-case.port.ts

import { CreateProductDto } from '../../dto/CreateProductDto';
import { ProductFilterDto } from '../../dto/ProductFilter';
import { ProductListResponseDto } from '../../dto/ProductListResponseDto';
import { ProductResponseDto } from '../../dto/ProductResponseDto';
import { UpdateProductDto } from '../../dto/UpdateProductDto';

export abstract class CreateProductUseCase {
  abstract execute(dto: CreateProductDto): Promise<ProductResponseDto>;
}

export abstract class UpdateProductUseCase {
  abstract execute(dto: UpdateProductDto): Promise<ProductResponseDto>;
}

export abstract class GetProductUseCase {
  abstract execute(id: string): Promise<ProductResponseDto>;
}

export abstract class GetProductListUseCase {
  abstract execute(): Promise<ProductListResponseDto>;
}

export abstract class GetProductListWithFilterUseCase {
  abstract execute(filter: ProductFilterDto): Promise<ProductListResponseDto>;
}
