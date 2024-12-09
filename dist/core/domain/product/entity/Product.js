"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
class ProductEntity {
    constructor(id = '', userId, name, price, image, category, description, createdDate, updatedDate) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
        this.description = description;
        this.createdDate = createdDate || new Date();
        this.updatedDate = updatedDate || new Date();
    }
    static toEntity(user) {
        return new ProductEntity(user?.id, user?.userId, user?.name, user?.price, user?.image, user?.category, user?.description, user?.createdDate, user?.updatedDate);
    }
}
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=Product.js.map