import { CreateStockLogDto } from '../../dto/StockLogRequestDto';
import { StockLogResponseDto } from '../../dto/StockLogResponseDto';
export declare abstract class CreateStockLogUseCase {
    abstract execute(dto: CreateStockLogDto): Promise<StockLogResponseDto>;
}
export declare abstract class GetStockLogUseCase {
    abstract execute(id: string): Promise<StockLogResponseDto>;
}
