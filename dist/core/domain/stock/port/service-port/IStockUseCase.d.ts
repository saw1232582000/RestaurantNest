import { CreateStockDto, UpdateStockDto } from '../../dto/StockRequestDto';
import { StockResponseDto } from '../../dto/StockResponseDto';
export declare abstract class CreateStockUseCase {
    abstract execute(dto: CreateStockDto): Promise<StockResponseDto>;
}
export declare abstract class UpdateStockUseCase {
    abstract execute(dto: UpdateStockDto): Promise<StockResponseDto>;
}
export declare abstract class GetStockUseCase {
    abstract execute(id: string): Promise<StockResponseDto>;
}
