"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoucherEntity = void 0;
class VoucherEntity {
    constructor(data) {
        this.id = data.id || '';
        this.code = data.code || '';
        this.discount = data.discount || 0;
        this.expiryDate = data.expiryDate || new Date();
        this.isActive = data.isActive ?? true;
        this.createdDate = data.createdDate || new Date();
    }
}
exports.VoucherEntity = VoucherEntity;
//# sourceMappingURL=Voucher.js.map