import { IProductRepository } from '../port/repository-port/IProductRepository';
import { IGetProductListUseCase } from '../port/service-port/IGetProductListUseCase';
import { ProductFilter } from '../dto/ProductFilter';
export declare class GetProductListUseCase implements IGetProductListUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(): Promise<any>;
}
export declare class GetProductListWithFilterUseCase implements IGetProductListUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(filter: ProductFilter): Promise<any>;
}
