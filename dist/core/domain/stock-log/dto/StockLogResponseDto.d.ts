import { StockLogEntity } from '../entity/StockLog';
export declare class StockLogResponseDto {
    id: string;
    stockId: string;
    quantity: number;
    reason: string;
    createdDate: Date;
    static fromEntity(entity: StockLogEntity): StockLogResponseDto;
}
