"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEntity = void 0;
const CartItem_1 = require("../../cart-item/entity/CartItem");
class CartEntity {
    constructor(id = '', userId, cartItems) {
        this.id = id;
        this.userId = userId;
        this.cartItems = cartItems;
    }
    static toEntity(cart) {
        const cartItems = cart?.cartItems.map((cartItem) => {
            return CartItem_1.CartItemEntity.toEntity(cartItem);
        });
        return new CartEntity(cart?.id, cart?.userId, cartItems ? cartItems : []);
    }
}
exports.CartEntity = CartEntity;
//# sourceMappingURL=Cart.js.map