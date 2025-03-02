export declare class StockLogEntity {
    id: string;
    stockId: string;
    quantity: number;
    reason: string;
    createdDate: Date;
    constructor(data: Partial<StockLogEntity>);
}
