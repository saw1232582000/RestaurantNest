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
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const StockResponseDto_1 = require("../../core/domain/stock/dto/StockResponseDto");
const IStockUseCase_1 = require("../../core/domain/stock/port/service-port/IStockUseCase");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const StockRequestDto_1 = require("../../core/domain/stock/dto/StockRequestDto");
class StockResponseSchema extends ApiResponseSchema_1.CoreApiResponseSchema {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: StockResponseDto_1.StockResponseDto }),
    __metadata("design:type", StockResponseDto_1.StockResponseDto)
], StockResponseSchema.prototype, "data", void 0);
let StockController = class StockController {
    constructor(createStockUseCase, updateStockUseCase, getStockUseCase) {
        this.createStockUseCase = createStockUseCase;
        this.updateStockUseCase = updateStockUseCase;
        this.getStockUseCase = getStockUseCase;
    }
    async create(dto) {
        const result = await this.createStockUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async update(dto) {
        const result = await this.updateStockUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async get(id) {
        const result = await this.getStockUseCase.execute(id);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
};
exports.StockController = StockController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiBody)({ type: StockRequestDto_1.CreateStockDto }),
    (0, swagger_1.ApiResponse)({ status: 201, type: StockResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StockRequestDto_1.CreateStockDto]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiBody)({ type: StockRequestDto_1.UpdateStockDto }),
    (0, swagger_1.ApiResponse)({ status: 200, type: StockResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StockRequestDto_1.UpdateStockDto]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiQuery)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, type: StockResponseSchema }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "get", null);
exports.StockController = StockController = __decorate([
    (0, swagger_1.ApiTags)('stock'),
    (0, common_1.Controller)('stock'),
    __metadata("design:paramtypes", [IStockUseCase_1.CreateStockUseCase,
        IStockUseCase_1.UpdateStockUseCase,
        IStockUseCase_1.GetStockUseCase])
], StockController);
//# sourceMappingURL=stock.controller.js.map