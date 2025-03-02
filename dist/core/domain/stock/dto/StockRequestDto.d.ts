export declare class CreateStockDto {
    productId?: string;
    ingredientId?: string;
    quantity: number;
    unit: string;
    threshold?: number;
    constructor(data: Partial<CreateStockDto>);
}
export declare class UpdateStockDto {
    id: string;
    productId?: string;
    ingredientId?: string;
    quantity: number;
    unit: string;
    threshold?: number;
    constructor(data: Partial<UpdateStockDto>);
}
