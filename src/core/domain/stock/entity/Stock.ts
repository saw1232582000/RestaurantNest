// src/stock/entity/stock.entity.ts
export class StockEntity {
  id: string;
  ingredientName: string;

  quantity: number;
  unit: string;
  threshold?: number;
  createdDate: Date;
  updatedDate: Date;

  constructor(data: Partial<StockEntity>) {
    this.id = data.id || '';
    this.ingredientName = data.ingredientName || '';

    this.quantity = data.quantity || 0;
    this.unit = data.unit || '';
    this.threshold = data.threshold;
    this.createdDate = data.createdDate || new Date();
    this.updatedDate = data.updatedDate || new Date();
  }
}
