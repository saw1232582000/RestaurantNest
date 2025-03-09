export declare class UpdateProductDto {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
    userId?: string;
    constructor(data: Partial<UpdateProductDto>);
}
