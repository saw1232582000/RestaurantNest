"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockLogEntity = void 0;
class StockLogEntity {
    constructor(data) {
        this.id = data.id || '';
        this.stockId = data.stockId || '';
        this.quantity = data.quantity || 0;
        this.reason = data.reason || '';
        this.createdDate = data.createdDate || new Date();
    }
}
exports.StockLogEntity = StockLogEntity;
//# sourceMappingURL=StockLog.js.map