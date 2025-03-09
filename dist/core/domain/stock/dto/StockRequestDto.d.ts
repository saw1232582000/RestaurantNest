export declare class CreateStockDto {
    ingredientName: string;
    quantity: number;
    unit: string;
    threshold?: number;
}
export declare class UpdateStockDto {
    id: string;
    ingredientName?: string;
    quantity?: number;
    unit?: string;
    threshold?: number;
    constructor(data: Partial<UpdateStockDto>);
}
export declare class GetStockListDto {
    ingredientName?: string;
    unit?: string;
    belowThreshold?: boolean;
    take?: number;
    skip?: number;
}
