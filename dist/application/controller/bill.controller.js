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
exports.BillController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const BillResponseDto_1 = require("../../core/domain/bill/dto/BillResponseDto");
const IBillUseCase_1 = require("../../core/domain/bill/port/service-port/IBillUseCase");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const BillRequestDto_1 = require("../../core/domain/bill/dto/BillRequestDto");
class BillResponseSchema extends ApiResponseSchema_1.CoreApiResponseSchema {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: BillResponseDto_1.BillResponseDto }),
    __metadata("design:type", BillResponseDto_1.BillResponseDto)
], BillResponseSchema.prototype, "data", void 0);
let BillController = class BillController {
    constructor(createBillUseCase, updateBillUseCase, getBillUseCase) {
        this.createBillUseCase = createBillUseCase;
        this.updateBillUseCase = updateBillUseCase;
        this.getBillUseCase = getBillUseCase;
    }
    async create(dto) {
        const result = await this.createBillUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async update(dto) {
        const result = await this.updateBillUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async get(id) {
        const result = await this.getBillUseCase.execute(id);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
};
exports.BillController = BillController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiBody)({ type: BillRequestDto_1.CreateBillDto }),
    (0, swagger_1.ApiResponse)({ status: 201, type: BillResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BillRequestDto_1.CreateBillDto]),
    __metadata("design:returntype", Promise)
], BillController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiBody)({ type: BillRequestDto_1.UpdateBillDto }),
    (0, swagger_1.ApiResponse)({ status: 200, type: BillResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BillRequestDto_1.UpdateBillDto]),
    __metadata("design:returntype", Promise)
], BillController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiQuery)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, type: BillResponseSchema }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BillController.prototype, "get", null);
exports.BillController = BillController = __decorate([
    (0, swagger_1.ApiTags)('bill'),
    (0, common_1.Controller)('bill'),
    __metadata("design:paramtypes", [IBillUseCase_1.CreateBillUseCase,
        IBillUseCase_1.UpdateBillUseCase,
        IBillUseCase_1.GetBillUseCase])
], BillController);
//# sourceMappingURL=bill.controller.js.map