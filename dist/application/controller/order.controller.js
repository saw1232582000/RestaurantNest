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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const CreateOrderUseCase_1 = require("../../core/domain/order/service/CreateOrderUseCase");
const GetOrderUseCase_1 = require("../../core/domain/order/service/GetOrderUseCase");
const GetOrderListUseCase_1 = require("../../core/domain/order/service/GetOrderListUseCase");
const PrismaOrderRepository_1 = require("../../core/domain/order/repository/PrismaOrderRepository");
const client_1 = require("@prisma/client");
const CreateOrderDto_1 = require("../../core/domain/order/dto/CreateOrderDto");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const CreateOrderRequestSchema_1 = require("./documentation/order/RequestSchema/CreateOrderRequestSchema");
const OrderItem_1 = require("../../core/domain/order/entity/OrderItem");
const BaseRequestQuerySchema_1 = require("./documentation/common/BaseRequestQuerySchema");
const OrderFilterSchema_1 = require("./documentation/order/RequestSchema/OrderFilterSchema");
const OrderFilter_1 = require("../../core/domain/order/dto/OrderFilter");
const GetOrderResponseSchema_1 = require("./documentation/order/ResponseSchema/GetOrderResponseSchema");
const GetOrderListResponseSchema_1 = require("./documentation/order/ResponseSchema/GetOrderListResponseSchema");
const CreateOrderResponseSchema_1 = require("./documentation/order/ResponseSchema/CreateOrderResponseSchema");
let OrderController = class OrderController {
    constructor(createOrderUseCase, getOrderUseCase, getOrderListUseCase) {
        this.createOrderUseCase = createOrderUseCase;
        this.getOrderUseCase = getOrderUseCase;
        this.getOrderListUseCase = getOrderListUseCase;
    }
    async createOrder(order, req) {
        this.createOrderUseCase = new CreateOrderUseCase_1.CreateorderUseCase(new PrismaOrderRepository_1.PrismaOrderRepository(new client_1.PrismaClient()));
        const createOrderDto = new CreateOrderDto_1.CreateOrderDto();
        createOrderDto.table = order?.table;
        createOrderDto.status = order.status;
        createOrderDto.userId = req.user?.user?.id;
        createOrderDto.orderItems = order.orderItems.map((orderItem) => {
            return OrderItem_1.OrderItemEntity.toEntity(orderItem);
        });
        await this.createOrderUseCase.execute(createOrderDto);
        return ApiResponseSchema_1.CoreApiResonseSchema.success({
            message: 'Order Created Successfully',
        });
    }
    async getOrder(req, params) {
        this.getOrderUseCase = new GetOrderUseCase_1.GetOrderUseCase(new PrismaOrderRepository_1.PrismaOrderRepository(new client_1.PrismaClient()));
        const order = await this.getOrderUseCase.execute(params.id);
        return ApiResponseSchema_1.CoreApiResonseSchema.success(order);
    }
    async getOrderList(params, req) {
        this.getOrderListUseCase = new GetOrderListUseCase_1.GetOrderListWithFilterUseCase(new PrismaOrderRepository_1.PrismaOrderRepository(new client_1.PrismaClient()));
        const orderFilter = new OrderFilter_1.OrderFilter(params.startDate, params.endDate, parseInt(params?.take.toString()), parseInt(params?.skip.toString()), params.status);
        const orderList = await this.getOrderListUseCase.execute(orderFilter);
        return ApiResponseSchema_1.CoreApiResonseSchema.success(orderList);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: CreateOrderResponseSchema_1.CreateOrderResponseSchema }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrderRequestSchema_1.CreateOrderRequestSchema, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiQuery)({ type: BaseRequestQuerySchema_1.BaseRequestQuerySchema }),
    (0, swagger_1.ApiResponse)({ type: GetOrderResponseSchema_1.GetOrderResponseSchema }),
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: GetOrderListResponseSchema_1.GetOrderListResponseSchema }),
    (0, common_1.Get)('/getList'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderFilterSchema_1.OrderFilterSchama, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderList", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('Order'),
    (0, swagger_1.ApiTags)('order'),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [CreateOrderUseCase_1.CreateorderUseCase,
        GetOrderUseCase_1.GetOrderUseCase,
        GetOrderListUseCase_1.GetOrderListWithFilterUseCase])
], OrderController);
//# sourceMappingURL=order.controller.js.map