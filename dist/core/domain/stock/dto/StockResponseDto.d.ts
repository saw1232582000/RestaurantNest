import { StockEntity } from '../entity/Stock';
export declare class StockResponseDto {
    id: string;
    productId?: string;
    ingredientId?: string;
    quantity: number;
    unit: string;
    threshold?: number;
    createdDate: Date;
    updatedDate: Date;
    static fromEntity(entity: StockEntity): StockResponseDto;
}
