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
    constructor(id: string, userId: string, name: string, price: number, image: string, category: string, description: string, createdDate?: Date, updatedDate?: Date);
    static toEntity(user: any): ProductEntity;
}
