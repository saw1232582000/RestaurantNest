import { IAddToCartUseCase } from '../port/service-port/IAddToCartUseCase';
import { ICartRepository } from '../port/repository-port/ICartRepository';
import { AddToCartDto } from '../dto/AddToCartDto';
export declare class AddToCartUseCase implements IAddToCartUseCase {
    private readonly cartRepository;
    constructor(cartRepository: ICartRepository);
    execute(data?: AddToCartDto): Promise<any>;
}
