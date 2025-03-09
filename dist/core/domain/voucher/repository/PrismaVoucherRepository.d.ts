import { VoucherRepository } from '../port/repository-port/IVoucherRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { VoucherEntity } from '../entity/Voucher';
export declare class PrismaVoucherRepository implements VoucherRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(entity: VoucherEntity): Promise<VoucherEntity>;
    update(entity: VoucherEntity): Promise<VoucherEntity>;
    find(by: {
        id?: string;
        code?: string;
    }): Promise<VoucherEntity | null>;
    private handlePrismaError;
}
