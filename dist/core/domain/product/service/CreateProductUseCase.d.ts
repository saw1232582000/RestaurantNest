import { ICreateProductUseCase } from '../port/service-port/ICreateProductUseCase';
import { CreateProductDto } from '../dto/CreateProductDto';
import { IProductRepository } from '../port/repository-port/IProductRepository';
export declare class CreateProductUseCase implements ICreateProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(data?: CreateProductDto): Promise<any>;
}
