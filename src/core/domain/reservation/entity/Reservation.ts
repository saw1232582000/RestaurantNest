// src/reservation/entity/reservation.entity.ts
export class ReservationEntity {
  id: string;
  userId: string;
  customerName: string;
  phone: string;
  table: string;
  reservationTime: Date;
  status: string;
  createdDate: Date;
  updatedDate: Date;

  constructor(data: Partial<ReservationEntity>) {
    this.id = data.id || '';
    this.userId = data.userId || '';
    this.customerName = data.customerName || '';
    this.phone = data.phone || '';
    this.table = data.table || '';
    this.reservationTime = data.reservationTime || new Date();
    this.status = data.status || 'Pending';
    this.createdDate = data.createdDate || new Date();
    this.updatedDate = data.updatedDate || new Date();
  }
}
