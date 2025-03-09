import { ProductRepository } from '../port/repository-port/IProductRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { ProductEntity } from '../entity/Product';
import { ProductFilterDto } from '../dto/ProductFilter';
export declare class PrismaProductRepository implements ProductRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(entity: ProductEntity): Promise<ProductEntity>;
    update(entity: ProductEntity): Promise<ProductEntity>;
    delete(id: string): Promise<boolean>;
    find(by: {
        id?: string;
        name?: string;
    }): Promise<ProductEntity | null>;
    findAll(): Promise<ProductEntity[]>;
    findAllWithFilter(filter: ProductFilterDto): Promise<{
        products: ProductEntity[];
        totalCounts: number;
    }>;
    private handlePrismaError;
}
