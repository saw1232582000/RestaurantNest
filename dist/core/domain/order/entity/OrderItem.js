"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemEntity = void 0;
class OrderItemEntity {
    constructor(Id = '', productId, status, quantity, orderId, createdDate) {
        this.Id = Id;
        this.orderId = orderId;
        this.productId = productId;
        this.status = status;
        this.quantity = quantity;
        this.createdDate = createdDate || new Date();
    }
    static toEntity(orderItem) {
        return new OrderItemEntity(orderItem?.Id, orderItem?.productId, orderItem?.status, orderItem?.quantity, orderItem?.orderId, orderItem?.createdDate);
    }
}
exports.OrderItemEntity = OrderItemEntity;
//# sourceMappingURL=OrderItem.js.map