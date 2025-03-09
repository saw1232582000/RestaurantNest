import { CreateStockLogDto } from '../../dto/StockLogRequestDto';
import { StockLogResponseDto } from '../../dto/StockLogResponseDto';

export abstract class CreateStockLogUseCase {
  abstract execute(dto: CreateStockLogDto): Promise<StockLogResponseDto>;
}

export abstract class GetStockLogUseCase {
  abstract execute(id: string): Promise<StockLogResponseDto>;
}
