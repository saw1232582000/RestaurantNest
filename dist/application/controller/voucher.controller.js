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
exports.VoucherController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const VoucherResponseDto_1 = require("../../core/domain/voucher/dto/VoucherResponseDto");
const IVoucherUseCase_1 = require("../../core/domain/voucher/port/service-port/IVoucherUseCase");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const VoucherRequestDto_1 = require("../../core/domain/voucher/dto/VoucherRequestDto");
class VoucherResponseSchema extends ApiResponseSchema_1.CoreApiResponseSchema {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: VoucherResponseDto_1.VoucherResponseDto }),
    __metadata("design:type", VoucherResponseDto_1.VoucherResponseDto)
], VoucherResponseSchema.prototype, "data", void 0);
let VoucherController = class VoucherController {
    constructor(createVoucherUseCase, updateVoucherUseCase, getVoucherUseCase) {
        this.createVoucherUseCase = createVoucherUseCase;
        this.updateVoucherUseCase = updateVoucherUseCase;
        this.getVoucherUseCase = getVoucherUseCase;
    }
    async create(dto) {
        const result = await this.createVoucherUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async update(dto) {
        const result = await this.updateVoucherUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async get(id) {
        const result = await this.getVoucherUseCase.execute(id);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
};
exports.VoucherController = VoucherController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiBody)({ type: VoucherRequestDto_1.CreateVoucherDto }),
    (0, swagger_1.ApiResponse)({ status: 201, type: VoucherResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VoucherRequestDto_1.CreateVoucherDto]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiBody)({ type: VoucherRequestDto_1.UpdateVoucherDto }),
    (0, swagger_1.ApiResponse)({ status: 200, type: VoucherResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VoucherRequestDto_1.UpdateVoucherDto]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiQuery)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, type: VoucherResponseSchema }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "get", null);
exports.VoucherController = VoucherController = __decorate([
    (0, swagger_1.ApiTags)('voucher'),
    (0, common_1.Controller)('voucher'),
    __metadata("design:paramtypes", [IVoucherUseCase_1.CreateVoucherUseCase,
        IVoucherUseCase_1.UpdateVoucherUseCase,
        IVoucherUseCase_1.GetVoucherUseCase])
], VoucherController);
//# sourceMappingURL=voucher.controller.js.map