import { StockLogRepository } from '../port/repository-port/IStockLogRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { StockLogEntity } from '../entity/StockLog';
export declare class PrismaStockLogRepository implements StockLogRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(entity: StockLogEntity): Promise<StockLogEntity>;
    find(by: {
        id?: string;
    }): Promise<StockLogEntity | null>;
    private handlePrismaError;
}
