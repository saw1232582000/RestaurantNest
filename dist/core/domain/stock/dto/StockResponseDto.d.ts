import { StockEntity } from '../entity/Stock';
export declare class StockResponseDto {
    id: string;
    ingredientName: string;
    quantity: number;
    unit: string;
    threshold?: number;
    createdDate: Date;
    updatedDate: Date;
    static fromEntity(entity: StockEntity): StockResponseDto;
}
export declare class StockListResponseDto {
    items: StockResponseDto[];
    total: number;
    static fromEntities(entities: StockEntity[], total: number): StockListResponseDto;
}
