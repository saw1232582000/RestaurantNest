"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFilter = void 0;
const BaseFilterSchema_1 = require("../../../common/schema/BaseFilterSchema");
class OrderFilter extends BaseFilterSchema_1.BaseFilterSchema {
    constructor(date, take, skip) {
        super(take, skip);
        this.date = date || "";
    }
}
exports.OrderFilter = OrderFilter;
//# sourceMappingURL=OrderFilter.js.map