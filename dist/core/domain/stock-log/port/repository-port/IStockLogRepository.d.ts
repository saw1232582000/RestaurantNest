import { StockLogEntity } from '../../entity/StockLog';
export declare abstract class StockLogRepository {
    abstract create(entity: StockLogEntity): Promise<StockLogEntity>;
    abstract find(by: {
        id?: string;
    }): Promise<StockLogEntity | null>;
}
