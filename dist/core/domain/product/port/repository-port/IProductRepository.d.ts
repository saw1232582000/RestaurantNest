import { ProductFilterDto } from '../../dto/ProductFilter';
import { ProductEntity } from '../../entity/Product';
export declare abstract class ProductRepository {
    abstract create(entity: ProductEntity): Promise<ProductEntity>;
    abstract update(entity: ProductEntity): Promise<ProductEntity>;
    abstract delete(id: string): Promise<boolean>;
    abstract find(by: {
        id?: string;
        name?: string;
    }): Promise<ProductEntity | null>;
    abstract findAll(): Promise<ProductEntity[]>;
    abstract findAllWithFilter(filter: ProductFilterDto): Promise<{
        products: ProductEntity[];
        totalCounts: number;
    }>;
}
