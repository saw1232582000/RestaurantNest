import { ProductEntity } from '../entity/Product';
export declare class ProductResponseDto {
    id: string;
    userId: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    createdDate: Date;
    updatedDate: Date;
    static fromEntity(entity: ProductEntity): ProductResponseDto;
}
