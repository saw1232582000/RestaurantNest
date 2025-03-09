"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationEntity = void 0;
class ReservationEntity {
    constructor(data) {
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
exports.ReservationEntity = ReservationEntity;
//# sourceMappingURL=Reservation.js.map