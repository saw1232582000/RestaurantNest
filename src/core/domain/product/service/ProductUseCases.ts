// src/product/use-case/create-product.use-case.ts

import { BadRequestException, Injectable } from '@nestjs/common';

import { ProductRepository } from '../port/repository-port/IProductRepository';
import { ProductResponseDto } from '../dto/ProductResponseDto';
import { CreateProductDto } from '../dto/CreateProductDto';
import { ProductEntity } from '../entity/Product';
import {
  CreateProductUseCase,
  GetProductListUseCase,
  GetProductListWithFilterUseCase,
  GetProductUseCase,
  UpdateProductUseCase,
} from '../port/service-port/IProductUseCase';
import { UpdateProductDto } from '../dto/UpdateProductDto';
import { ProductListResponseDto } from '../dto/ProductListResponseDto';
import { ProductFilterDto } from '../dto/ProductFilter';

@Injectable()
export class CreateProductUseCaseImpl implements CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(dto: CreateProductDto): Promise<ProductResponseDto> {
    const entity = new ProductEntity({ ...dto });
    const created = await this.productRepository.create(entity);
    return ProductResponseDto.fromEntity(created);
  }
}

@Injectable()
export class UpdateProductUseCaseImpl implements UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(dto: UpdateProductDto): Promise<ProductResponseDto> {
    const entity = new ProductEntity({ ...dto });
    const updated = await this.productRepository.update(entity);
    return ProductResponseDto.fromEntity(updated);
  }
}

@Injectable()
export class GetProductUseCaseImpl implements GetProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<ProductResponseDto> {
    const product = await this.productRepository.find({ id });
    if (!product) throw new BadRequestException('Product not found');
    return ProductResponseDto.fromEntity(product);
  }
}

@Injectable()
export class GetProductListUseCaseImpl implements GetProductListUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<ProductListResponseDto> {
    const products = await this.productRepository.findAll();
    return ProductListResponseDto.fromEntities(products, products.length);
  }
}

@Injectable()
export class GetProductListWithFilterUseCaseImpl
  implements GetProductListWithFilterUseCase
{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(filter: ProductFilterDto): Promise<ProductListResponseDto> {
    const { products, totalCounts } =
      await this.productRepository.findAllWithFilter(filter);
    return ProductListResponseDto.fromEntities(products, totalCounts);
  }
}
