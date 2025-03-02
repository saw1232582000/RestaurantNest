import { CreateStockUseCase, GetStockUseCase, UpdateStockUseCase } from '../port/service-port/IStockUseCase';
import { StockRepository } from '../port/repository-port/IStockRepository';
import { CreateStockDto, UpdateStockDto } from '../dto/StockRequestDto';
import { StockResponseDto } from '../dto/StockResponseDto';
export declare class CreateStockUseCaseImpl implements CreateStockUseCase {
    private readonly stockRepository;
    constructor(stockRepository: StockRepository);
    execute(dto: CreateStockDto): Promise<StockResponseDto>;
}
export declare class UpdateStockUseCaseImpl implements UpdateStockUseCase {
    private readonly stockRepository;
    constructor(stockRepository: StockRepository);
    execute(dto: UpdateStockDto): Promise<StockResponseDto>;
}
export declare class GetStockUseCaseImpl implements GetStockUseCase {
    private readonly stockRepository;
    constructor(stockRepository: StockRepository);
    execute(id: string): Promise<StockResponseDto>;
}
