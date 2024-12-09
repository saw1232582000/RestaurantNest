import { IBaseRepository } from 'src/core/common/base-repository/port';
import { ProductEntity } from '../../entity/Product';
import { ProductFilter } from '../../dto/ProductFilter';
export declare abstract class IProductRepository implements IBaseRepository<ProductEntity, {
    id?: string;
    email?: string;
    name?: string;
}> {
    create: (entity: ProductEntity) => Promise<ProductEntity>;
    delete: (id: string) => Promise<boolean>;
    find: (by: {
        id?: string;
        name?: string;
    }) => Promise<ProductEntity | null>;
    findAll: () => Promise<ProductEntity[]>;
    update: (entity: ProductEntity) => Promise<ProductEntity>;
    findAllWithSchema: (filter: ProductFilter) => Promise<{
        products: ProductEntity[];
        totalCounts: number;
    }>;
}