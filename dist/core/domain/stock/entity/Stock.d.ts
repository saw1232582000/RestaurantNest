export declare class StockEntity {
    id: string;
    productId?: string;
    quantity: number;
    unit: string;
    threshold?: number;
    createdDate: Date;
    updatedDate: Date;
    constructor(data: Partial<StockEntity>);
}
