export declare class StockEntity {
    id: string;
    ingredientName: string;
    quantity: number;
    unit: string;
    threshold?: number;
    createdDate: Date;
    updatedDate: Date;
    constructor(data: Partial<StockEntity>);
}
