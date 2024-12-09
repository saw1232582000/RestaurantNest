"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateorderUseCase = void 0;
const common_1 = require("@nestjs/common");
const IOrderRepository_1 = require("../port/repository-port/IOrderRepository");
const CreateOrderDto_1 = require("../dto/CreateOrderDto");
const Order_1 = require("../entity/Order");
const OrderItem_1 = require("../entity/OrderItem");
let CreateorderUseCase = class CreateorderUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(data) {
        const newOrder = new Order_1.OrderEntity(undefined, data?.userId, data?.table, data?.status, data?.orderItems?.map((orderItem) => {
            return OrderItem_1.OrderItemEntity.toEntity(orderItem);
        }));
        const createdOrder = await this.orderRepository.create(newOrder);
        return CreateOrderDto_1.CreateOrderDto.convertToClass(createdOrder);
    }
};
exports.CreateorderUseCase = CreateorderUseCase;
exports.CreateorderUseCase = CreateorderUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PrismaOrderRepository')),
    __metadata("design:paramtypes", [IOrderRepository_1.IOrderRepository])
], CreateorderUseCase);
//# sourceMappingURL=CreateOrderUseCase.js.map