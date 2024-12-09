import { IBaseRepository } from 'src/core/common/base-repository/port';
import { OrderEntity } from '../../entity/Order';
import { OrderFilter } from '../../dto/OrderFilter';
export declare abstract class IOrderRepository implements IBaseRepository<OrderEntity, {
    id?: string;
    email?: string;
    name?: string;
}> {
    create: (entity: OrderEntity) => Promise<OrderEntity>;
    delete: (id: string) => Promise<boolean>;
    find: (by: {
        id?: string;
        name?: string;
    }) => Promise<OrderEntity | null>;
    findAll: () => Promise<OrderEntity[]>;
    update: (entity: OrderEntity) => Promise<OrderEntity>;
    findAllWithSchema: (filter: OrderFilter) => Promise<{
        orders: OrderEntity[];
        totalCounts: number;
    }>;
}