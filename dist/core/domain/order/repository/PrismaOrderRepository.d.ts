import { PrismaClient } from '@prisma/client';
import { IOrderRepository } from '../port/repository-port/IOrderRepository';
import { OrderEntity } from '../entity/Order';
import { OrderFilter } from '../dto/OrderFilter';
export declare class PrismaOrderRepository implements IOrderRepository {
    readonly prisma: PrismaClient;
    constructor(prisma: PrismaClient);
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
