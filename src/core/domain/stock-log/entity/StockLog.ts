// src/stock-log/entity/stock-log.entity.ts
export class StockLogEntity {
  id: string;
  stockId: string;
  quantity: number;
  reason: string;
  createdDate: Date;

  constructor(data: Partial<StockLogEntity>) {
    this.id = data.id || '';
    this.stockId = data.stockId || '';
    this.quantity = data.quantity || 0;
    this.reason = data.reason || '';
    this.createdDate = data.createdDate || new Date();
  }
}
