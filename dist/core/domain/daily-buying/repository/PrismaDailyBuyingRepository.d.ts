import { DailyBuyingEntity } from '../entity/DailyBuying';
import { DailyBuyingFilter } from '../dto/DailyBuyingFilter';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
export declare class PrismaDailyBuyingRepository implements IDailyBuyingRepository {
    readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    create(dailyBuying: DailyBuyingEntity): Promise<DailyBuyingEntity>;
    createMany(dailyBuyings: DailyBuyingEntity[]): Promise<string>;
    update(dailyBuying: DailyBuyingEntity): Promise<DailyBuyingEntity>;
    delete(Id: string): Promise<boolean>;
    find(by: {
        Id?: string;
    }): Promise<DailyBuyingEntity | null>;
    findAll(): Promise<DailyBuyingEntity[]>;
    findAllWithSchema(filter: DailyBuyingFilter): Promise<{
        DailyBuyings: DailyBuyingEntity[];
        totalCounts: number;
    }>;
}
