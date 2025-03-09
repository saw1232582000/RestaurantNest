// src/stock-log/port/repository.port.ts

import { StockLogEntity } from '../../entity/StockLog';

export abstract class StockLogRepository {
  abstract create(entity: StockLogEntity): Promise<StockLogEntity>;
  abstract find(by: { id?: string }): Promise<StockLogEntity | null>;
}
