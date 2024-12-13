import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { OrderEntity } from '../entity/Order';
import { OrderFilter } from '../dto/OrderFilter';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
export declare class PrismaOrderRepository implements IOrderRepository {
    readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    create(order: OrderEntity): Promise<OrderEntity>;
    update(order: OrderEntity): Promise<OrderEntity>;
    delete(id: string): Promise<boolean>;
    find(by: {
        id?: string;
        email?: string;
        name?: string;
    }): Promise<OrderEntity | null>;
    findAll(): Promise<OrderEntity[]>;
    findAllWithSchema(filter: OrderFilter): Promise<{
        orders: OrderEntity[];
        totalCounts: number;
    }>;
}
