import { CreateStockDto, GetStockListDto, UpdateStockDto } from '../../dto/StockRequestDto';
import { StockListResponseDto, StockResponseDto } from '../../dto/StockResponseDto';
export declare abstract class CreateStockUseCase {
    abstract execute(dto: CreateStockDto): Promise<StockResponseDto>;
}
export declare abstract class UpdateStockUseCase {
    abstract execute(dto: UpdateStockDto): Promise<StockResponseDto>;
}
export declare abstract class GetStockUseCase {
    abstract execute(id: string): Promise<StockResponseDto>;
}
export declare abstract class GetStockListUseCase {
    abstract execute(filter?: GetStockListDto): Promise<StockListResponseDto>;
}
