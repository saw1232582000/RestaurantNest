import { BillRepository } from '../port/repository-port/IBillRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { BillEntity } from '../entity/Bill';
export declare class PrismaBillRepository implements BillRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(entity: BillEntity): Promise<BillEntity>;
    update(entity: BillEntity): Promise<BillEntity>;
    find(by: {
        id?: string;
        orderId?: string;
    }): Promise<BillEntity | null>;
    private handlePrismaError;
}
