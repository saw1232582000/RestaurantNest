"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemEntity = void 0;
class CartItemEntity {
    constructor(id = '', cartId, productId, quantity, createdDate, updatedDate) {
        this.id = id;
        this.cartId = cartId;
        this.productId = productId;
        this.quantity = quantity;
        this.createdDate = createdDate || new Date();
        this.updatedDate = updatedDate || new Date();
    }
    static toEntity(user) {
        return new CartItemEntity(user?.id, user?.cartId, user?.productId, user?.description, user?.createdDate, user?.updatedDate);
    }
}
exports.CartItemEntity = CartItemEntity;
//# sourceMappingURL=CartItem.js.map