import { IProductRepository } from '../port/repository-port/IProductRepository';
import { IGetProductUseCase } from '../port/service-port/IGetProductUseCase';
export declare class GetProductUseCase implements IGetProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(id: string): Promise<any>;
}
