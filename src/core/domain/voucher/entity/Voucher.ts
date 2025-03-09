// src/voucher/entity/voucher.entity.ts
export class VoucherEntity {
  id: string;
  code: string;
  discount: number;
  expiryDate: Date;
  isActive: boolean;
  createdDate: Date;

  constructor(data: Partial<VoucherEntity>) {
    this.id = data.id || '';
    this.code = data.code || '';
    this.discount = data.discount || 0;
    this.expiryDate = data.expiryDate || new Date();
    this.isActive = data.isActive ?? true;
    this.createdDate = data.createdDate || new Date();
  }
}
