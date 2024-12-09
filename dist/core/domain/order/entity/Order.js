"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEntity = void 0;
class OrderEntity {
    constructor(Id = '', userId, table, status, orderItems, createdDate, updatedDate) {
        this.Id = Id;
        this.userId = userId;
        this.table = table;
        this.status = status;
        this.orderItems = orderItems;
        this.createdDate = createdDate || new Date();
        this.updatedDate = updatedDate || new Date();
    }
    static toEntity(order) {
        return new OrderEntity(order?.Id, order?.userId, order?.table, order?.status, order?.orderItems, order?.createdDate, order?.updatedDate);
    }
}
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=Order.js.map