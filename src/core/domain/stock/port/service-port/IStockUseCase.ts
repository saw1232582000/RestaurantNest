import { CreateStockDto, UpdateStockDto } from '../../dto/StockRequestDto';
import { StockResponseDto } from '../../dto/StockResponseDto';

export abstract class CreateStockUseCase {
  abstract execute(dto: CreateStockDto): Promise<StockResponseDto>;
}

export abstract class UpdateStockUseCase {
  abstract execute(dto: UpdateStockDto): Promise<StockResponseDto>;
}

export abstract class GetStockUseCase {
  abstract execute(id: string): Promise<StockResponseDto>;
}
