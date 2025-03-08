import { CoreApiResponseSchema } from '@src/core/common/schema/ApiResponseSchema';
import { StockListResponseDto, StockResponseDto } from '@src/core/domain/stock/dto/StockResponseDto';
import { CreateStockUseCase, GetStockListUseCase, GetStockUseCase, UpdateStockUseCase } from '@src/core/domain/stock/port/service-port/IStockUseCase';
import { CreateStockDto, UpdateStockDto } from '@src/core/domain/stock/dto/StockRequestDto';
export declare class StockController {
    private readonly createStockUseCase;
    private readonly updateStockUseCase;
    private readonly getStockUseCase;
    private readonly getStockListUseCase;
    constructor(createStockUseCase: CreateStockUseCase, updateStockUseCase: UpdateStockUseCase, getStockUseCase: GetStockUseCase, getStockListUseCase: GetStockListUseCase);
    create(dto: CreateStockDto): Promise<CoreApiResponseSchema<StockResponseDto>>;
    update(dto: UpdateStockDto): Promise<CoreApiResponseSchema<StockResponseDto>>;
    get(id: string): Promise<CoreApiResponseSchema<StockResponseDto>>;
    getList(ingredientName?: string, unit?: string, belowThreshold?: string): Promise<CoreApiResponseSchema<StockListResponseDto>>;
}
