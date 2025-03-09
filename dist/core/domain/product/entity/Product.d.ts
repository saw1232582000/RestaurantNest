export declare class ProductEntity {
    id: string;
    userId: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    createdDate: Date;
    updatedDate: Date;
    constructor(data: Partial<ProductEntity>);
}
