"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFilter = void 0;
const BaseFilterSchema_1 = require("../../../common/schema/BaseFilterSchema");
class OrderFilter extends BaseFilterSchema_1.BaseFilterSchema {
    constructor(startDate, endDate, take, skip, status) {
        super(take, skip);
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status ?? null;
    }
}
exports.OrderFilter = OrderFilter;
//# sourceMappingURL=OrderFilter.js.map