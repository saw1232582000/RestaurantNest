import { PrismaClient } from '@prisma/client';
import { IProductRepository } from '../port/repository-port/IProductRepository';
import { ProductEntity } from '../entity/Product';
import { ProductFilter } from '../dto/ProductFilter';
export declare class PrismaProductRepository implements IProductRepository {
    readonly prisma: PrismaClient;
    constructor(prisma: PrismaClient);
    create(product: ProductEntity): Promise<ProductEntity>;
    update(product: ProductEntity): Promise<ProductEntity>;
    delete(id: string): Promise<boolean>;
    find(by: {
        id?: string;
        email?: string;
        name?: string;
    }): Promise<ProductEntity | null>;
    findAll(): Promise<ProductEntity[]>;
    findAllWithSchema(filter: ProductFilter): Promise<{
        products: ProductEntity[];
        totalCounts: number;
    }>;
}
