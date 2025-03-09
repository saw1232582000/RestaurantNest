import { ProductRepository } from '../port/repository-port/IProductRepository';
import { ProductResponseDto } from '../dto/ProductResponseDto';
import { CreateProductDto } from '../dto/CreateProductDto';
import { CreateProductUseCase, GetProductListUseCase, GetProductListWithFilterUseCase, GetProductUseCase, UpdateProductUseCase } from '../port/service-port/IProductUseCase';
import { UpdateProductDto } from '../dto/UpdateProductDto';
import { ProductListResponseDto } from '../dto/ProductListResponseDto';
import { ProductFilterDto } from '../dto/ProductFilter';
export declare class CreateProductUseCaseImpl implements CreateProductUseCase {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    execute(dto: CreateProductDto): Promise<ProductResponseDto>;
}
export declare class UpdateProductUseCaseImpl implements UpdateProductUseCase {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    execute(dto: UpdateProductDto): Promise<ProductResponseDto>;
}
export declare class GetProductUseCaseImpl implements GetProductUseCase {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    execute(id: string): Promise<ProductResponseDto>;
}
export declare class GetProductListUseCaseImpl implements GetProductListUseCase {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    execute(): Promise<ProductListResponseDto>;
}
export declare class GetProductListWithFilterUseCaseImpl implements GetProductListWithFilterUseCase {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    execute(filter: ProductFilterDto): Promise<ProductListResponseDto>;
}
