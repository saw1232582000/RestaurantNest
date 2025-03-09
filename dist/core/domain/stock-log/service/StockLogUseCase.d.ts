import { CreateStockLogUseCase, GetStockLogUseCase } from '../port/service-port/IStockLogUseCase';
import { StockLogRepository } from '../port/repository-port/IStockLogRepository';
import { CreateStockLogDto } from '../dto/StockLogRequestDto';
import { StockLogResponseDto } from '../dto/StockLogResponseDto';
export declare class CreateStockLogUseCaseImpl implements CreateStockLogUseCase {
    private readonly stockLogRepository;
    constructor(stockLogRepository: StockLogRepository);
    execute(dto: CreateStockLogDto): Promise<StockLogResponseDto>;
}
export declare class GetStockLogUseCaseImpl implements GetStockLogUseCase {
    private readonly stockLogRepository;
    constructor(stockLogRepository: StockLogRepository);
    execute(id: string): Promise<StockLogResponseDto>;
}
