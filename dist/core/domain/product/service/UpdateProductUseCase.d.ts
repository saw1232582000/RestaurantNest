import { IUpdateProductUseCase } from '../port/service-port/IUpdateProductUseCase';
import { IProductRepository } from '../port/repository-port/IProductRepository';
import { UpdateProductDto } from '../dto/UpdateProductDto';
export declare class UpdateProductUseCase implements IUpdateProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(data?: UpdateProductDto): Promise<any>;
}
