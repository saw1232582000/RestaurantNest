import { StockFilter, StockRepository } from '../port/repository-port/IStockRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { StockEntity } from '../entity/Stock';
export declare class PrismaStockRepository implements StockRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(entity: StockEntity): Promise<StockEntity>;
    update(entity: StockEntity): Promise<StockEntity>;
    find(by: {
        id?: string;
    }): Promise<StockEntity | null>;
    findAll(filter?: StockFilter): Promise<{
        stocks: StockEntity[];
        total: number;
    }>;
    private handlePrismaError;
}
