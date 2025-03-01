import { ProductEntity } from '../entity/Product';
import { ProductResponseDto } from './ProductResponseDto';
export declare class ProductListResponseDto {
    products: ProductResponseDto[];
    totalCounts: number;
    static fromEntities(products: ProductEntity[], totalCounts: number): ProductListResponseDto;
}
