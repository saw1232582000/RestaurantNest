"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFilter = void 0;
const BaseFilterSchema_1 = require("../../../common/schema/BaseFilterSchema");
class ProductFilter extends BaseFilterSchema_1.BaseFilterSchema {
    constructor(category, name, take, skip) {
        super(take, skip);
        this.name = name || '';
        this.category = category || '';
    }
}
exports.ProductFilter = ProductFilter;
//# sourceMappingURL=ProductFilter.js.map