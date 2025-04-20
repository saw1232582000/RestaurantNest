"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
class ProductEntity {
    constructor(data) {
        Object.assign(this, {
            ...(data.id ? { id: data.id } : {}),
            userId: data.userId || '',
            name: data.name || '',
            price: data.price || 0,
            image: data.image || '',
            description: data.description || '',
            category: data.category || '',
            createdDate: data.createdDate || new Date(),
            updatedDate: data.updatedDate || new Date(),
        });
    }
}
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=Product.js.map