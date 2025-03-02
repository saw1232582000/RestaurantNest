"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillEntity = void 0;
class BillEntity {
    constructor(data) {
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
exports.BillEntity = BillEntity;
//# sourceMappingURL=Bill.js.map