// src/bill/entity/bill.entity.ts
export class BillEntity {
  id: string;
  orderId: string;
  totalAmount: number;
  tax?: number;
  discount?: number;
  finalAmount: number;
  status: string;
  paymentMethod?: string;
  createdDate: Date;

  constructor(data: Partial<BillEntity>) {
    this.id = data.id || '';
    this.orderId = data.orderId || '';
    this.totalAmount = data.totalAmount || 0;
    this.tax = data.tax;
    this.discount = data.discount;
    this.finalAmount = data.finalAmount || 0;
    this.status = data.status || 'Pending';
    this.paymentMethod = data.paymentMethod;
    this.createdDate = data.createdDate || new Date();
  }
}
