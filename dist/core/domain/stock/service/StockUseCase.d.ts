import { CreateStockUseCase, GetStockListUseCase, GetStockUseCase, UpdateStockUseCase } from '../port/service-port/IStockUseCase';
import { StockRepository } from '../port/repository-port/IStockRepository';
import { CreateStockDto, GetStockListDto, UpdateStockDto } from '../dto/StockRequestDto';
import { StockListResponseDto, StockResponseDto } from '../dto/StockResponseDto';
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
export declare class GetStockListUseCaseImpl implements GetStockListUseCase {
    private readonly stockRepository;
    constructor(stockRepository: StockRepository);
    execute(filter?: GetStockListDto): Promise<StockListResponseDto>;
}
