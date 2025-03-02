"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockEntity = void 0;
class StockEntity {
    constructor(data) {
        this.id = data.id || '';
        this.productId = data.productId;
        this.quantity = data.quantity || 0;
        this.unit = data.unit || '';
        this.threshold = data.threshold;
        this.createdDate = data.createdDate || new Date();
        this.updatedDate = data.updatedDate || new Date();
    }
}
exports.StockEntity = StockEntity;
//# sourceMappingURL=Stock.js.map