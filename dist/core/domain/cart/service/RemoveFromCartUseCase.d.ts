import { ICartRepository } from '../port/repository-port/ICartRepository';
import { IRemoveFromCartCase } from '../port/service-port/IRemoveFromCartUseCase';
import { RemoveFromCartDto } from '../dto/RemoveFromCartDto';
export declare class RemoveFromCartUseCase implements IRemoveFromCartCase {
    private readonly cartRepository;
    constructor(cartRepository: ICartRepository);
    execute(data?: RemoveFromCartDto): Promise<any>;
}
