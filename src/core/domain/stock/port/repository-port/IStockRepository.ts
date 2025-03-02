import { StockEntity } from '../../entity/Stock';

export abstract class StockRepository {
  abstract create(entity: StockEntity): Promise<StockEntity>;
  abstract update(entity: StockEntity): Promise<StockEntity>;
  abstract find(by: { id?: string }): Promise<StockEntity | null>;
}
