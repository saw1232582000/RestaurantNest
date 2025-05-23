import { StockEntity } from '../../entity/Stock';

export type StockFilter = {
  ingredientName?: string;
  unit?: string;
  belowThreshold?: boolean;
  skip?: number;
  take?: number;
};

export abstract class StockRepository {
  abstract create(entity: StockEntity): Promise<StockEntity>;
  abstract update(entity: StockEntity): Promise<StockEntity>;
  abstract find(by: { id?: string }): Promise<StockEntity | null>;
  abstract findAll(filter?: StockFilter): Promise<{
    stocks: StockEntity[];
    total: number;
  }>;
}
