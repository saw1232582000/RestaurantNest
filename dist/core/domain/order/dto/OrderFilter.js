"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFilter = void 0;
const StatusEnum_1 = require("../../../common/type/StatusEnum");
const BaseFilterSchema_1 = require("../../../common/schema/BaseFilterSchema");
class OrderFilter extends BaseFilterSchema_1.BaseFilterSchema {
    constructor(startDate, endDate, take, skip, status) {
        super(take, skip);
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status || StatusEnum_1.Status.PROCESSING;
    }
}
exports.OrderFilter = OrderFilter;
//# sourceMappingURL=OrderFilter.js.map