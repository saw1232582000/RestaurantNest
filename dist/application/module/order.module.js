"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("../controller/order.controller");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const IOrderRepository_1 = require("../../core/domain/order/port/repository-port/IOrderRepository");
const PrismaOrderRepository_1 = require("../../core/domain/order/repository/PrismaOrderRepository");
const GetOrderUseCase_1 = require("../../core/domain/order/service/GetOrderUseCase");
const CreateOrderUseCase_1 = require("../../core/domain/order/service/CreateOrderUseCase");
const GetOrderListUseCase_1 = require("../../core/domain/order/service/GetOrderListUseCase");
const UpdateOrderStatusUseCase_1 = require("../../core/domain/order/service/UpdateOrderStatusUseCase");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        controllers: [order_controller_1.OrderController],
        providers: [
            jwt_guard_1.JwtGuard,
            GetOrderUseCase_1.GetOrderUseCase,
            CreateOrderUseCase_1.CreateorderUseCase,
            GetOrderListUseCase_1.GetOrderListWithFilterUseCase,
            UpdateOrderStatusUseCase_1.UpdateOrderStatusUseCase,
            {
                provide: IOrderRepository_1.IOrderRepository,
                useClass: PrismaOrderRepository_1.PrismaOrderRepository,
            },
        ],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map