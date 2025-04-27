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
const UpdateOrderStatusRequestSchema_1 = require("./documentation/order/RequestSchema/UpdateOrderStatusRequestSchema");
const UpdateOrderStatusResponseSchema_1 = require("./documentation/order/ResponseSchema/UpdateOrderStatusResponseSchema");
const UpdateOrderStatusDto_1 = require("../../core/domain/order/dto/UpdateOrderStatusDto");
const UpdateOrderStatusUseCase_1 = require("../../core/domain/order/service/UpdateOrderStatusUseCase");
const UpdateOrderItemReqeustSchema_1 = require("./documentation/order/RequestSchema/UpdateOrderItemReqeustSchema");
const UpdateOrderItemDto_1 = require("../../core/domain/order/dto/UpdateOrderItemDto");
const UpdateOrderItemUseCase_1 = require("../../core/domain/order/service/UpdateOrderItemUseCase");
let OrderController = class OrderController {
    constructor(createOrderUseCase, getOrderUseCase, getOrderListUseCase, updateOrderStatusUseCase, updateOrderItemUseCase) {
        this.createOrderUseCase = createOrderUseCase;
        this.getOrderUseCase = getOrderUseCase;
        this.getOrderListUseCase = getOrderListUseCase;
        this.updateOrderStatusUseCase = updateOrderStatusUseCase;
        this.updateOrderItemUseCase = updateOrderItemUseCase;
    }
    async createOrder(order, req) {
        try {
            const createOrderDto = new CreateOrderDto_1.CreateOrderDto();
            createOrderDto.table = order.table;
            createOrderDto.status = order.status || 'PROCESSING';
            createOrderDto.userId = req.user?.user?.id;
            createOrderDto.orderItems = order.orderItems.map((orderItem) => {
                return OrderItem_1.OrderItemEntity.toEntity(orderItem);
            });
            const result = await this.createOrderUseCase.execute(createOrderDto);
            return ApiResponseSchema_1.CoreApiResponseSchema.success({
                message: 'Order Created Successfully',
                data: result,
            });
        }
        catch (error) {
            console.error('Create order error:', error);
            return ApiResponseSchema_1.CoreApiResponseSchema.error(error);
        }
    }
    async update(order, req, params) {
        const updateOrderStatusDto = new UpdateOrderStatusDto_1.UpdateOrderStatusDto();
        updateOrderStatusDto.id = params.id;
        updateOrderStatusDto.status = order.status;
        return ApiResponseSchema_1.CoreApiResponseSchema.success(await this.updateOrderStatusUseCase.execute(updateOrderStatusDto));
    }
    async updateOrderItems(order, req, params) {
        try {
            const updateOrderDto = new UpdateOrderItemDto_1.UpdateOrderItemDto();
            updateOrderDto.table = order.table;
            updateOrderDto.Id = params.id;
            updateOrderDto.status = '';
            updateOrderDto.orderItems = order.orderItems.map((orderItem) => {
                return OrderItem_1.OrderItemEntity.toEntity(orderItem);
            });
            await this.updateOrderItemUseCase.execute(updateOrderDto);
            return ApiResponseSchema_1.CoreApiResponseSchema.success({
                message: 'Order updated Successfully',
            });
        }
        catch (error) {
            console.error('Update order item error:', error);
            return ApiResponseSchema_1.CoreApiResponseSchema.error(500, 'Order Item Update Error', error);
        }
    }
    async getOrder(req, params) {
        const order = await this.getOrderUseCase.execute(params.id);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(order);
    }
    async getOrderList(params, req) {
        let filterStartDate = undefined;
        let filterEndDate = undefined;
        const parseDate = (dateString) => {
            if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
                const date = new Date(dateString);
                date.setHours(0, 0, 0, 0);
                return date;
            }
            else {
                console.warn(`Invalid date format received: ${dateString}. Expected YYYY-MM-DD. Ignoring.`);
                return undefined;
            }
        };
        if (params.startDate) {
            filterStartDate = parseDate(params.startDate);
        }
        if (params.endDate) {
            filterEndDate = parseDate(params.endDate);
        }
        if (!filterStartDate && !filterEndDate) {
            filterStartDate = undefined;
            filterEndDate = undefined;
        }
        else if (filterStartDate && !filterEndDate) {
            filterEndDate = new Date(filterStartDate);
            filterEndDate.setHours(23, 59, 59, 999);
        }
        else if (!filterStartDate && filterEndDate) {
            filterStartDate = new Date(filterEndDate);
            filterStartDate.setHours(0, 0, 0, 0);
            filterEndDate.setHours(23, 59, 59, 999);
        }
        else if (filterStartDate && filterEndDate) {
            filterEndDate.setHours(23, 59, 59, 999);
            if (filterStartDate > filterEndDate) {
                console.warn('Start date is after end date. Filtering might yield no results.');
            }
        }
        const orderFilter = new OrderFilter_1.OrderFilter(filterStartDate, filterEndDate, params.take ? parseInt(params.take.toString()) : 10, params.skip ? parseInt(params.skip.toString()) : 0, params.status);
        const orderList = await this.getOrderListUseCase.execute(orderFilter);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(orderList);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: CreateOrderRequestSchema_1.CreateOrderRequestSchema }),
    (0, swagger_1.ApiResponse)({ type: CreateOrderResponseSchema_1.CreateOrderResponseSchema }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrderRequestSchema_1.CreateOrderRequestSchema, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: UpdateOrderStatusRequestSchema_1.UpdateOrderStatusRequestSchema }),
    (0, swagger_1.ApiQuery)({ type: BaseRequestQuerySchema_1.BaseRequestQuerySchema }),
    (0, swagger_1.ApiResponse)({ type: UpdateOrderStatusResponseSchema_1.UpdateOrderStatusResponseSchema }),
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Query)(new common_1.ValidationPipe({
        transform: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateOrderStatusRequestSchema_1.UpdateOrderStatusRequestSchema, Object, BaseRequestQuerySchema_1.BaseRequestQuerySchema]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: UpdateOrderItemReqeustSchema_1.UpdateOrderItemRequestSchema }),
    (0, swagger_1.ApiResponse)({ type: CreateOrderResponseSchema_1.CreateOrderResponseSchema }),
    (0, swagger_1.ApiQuery)({ type: BaseRequestQuerySchema_1.BaseRequestQuerySchema }),
    (0, common_1.Put)('/updateOrderItems'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Query)(new common_1.ValidationPipe({
        transform: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateOrderItemReqeustSchema_1.UpdateOrderItemRequestSchema, Object, BaseRequestQuerySchema_1.BaseRequestQuerySchema]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderItems", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiQuery)({ type: BaseRequestQuerySchema_1.BaseRequestQuerySchema }),
    (0, swagger_1.ApiResponse)({ type: GetOrderResponseSchema_1.GetOrderResponseSchema }),
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)(new common_1.ValidationPipe({
        transform: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, BaseRequestQuerySchema_1.BaseRequestQuerySchema]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: GetOrderListResponseSchema_1.GetOrderListResponseSchema }),
    (0, common_1.Get)('/getList'),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe({
        transform: true,
    }))),
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
        GetOrderListUseCase_1.GetOrderListWithFilterUseCase,
        UpdateOrderStatusUseCase_1.UpdateOrderStatusUseCase,
        UpdateOrderItemUseCase_1.UpdateOrderItemUseCase])
], OrderController);
//# sourceMappingURL=order.controller.js.map