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
exports.ReservationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const ReservationResponseDto_1 = require("../../core/domain/reservation/dto/ReservationResponseDto");
const IReservationUseCase_1 = require("../../core/domain/reservation/port/service-port/IReservationUseCase");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const ReservationRequestDto_1 = require("../../core/domain/reservation/dto/ReservationRequestDto");
class ReservationResponseSchema extends ApiResponseSchema_1.CoreApiResponseSchema {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: ReservationResponseDto_1.ReservationResponseDto }),
    __metadata("design:type", ReservationResponseDto_1.ReservationResponseDto)
], ReservationResponseSchema.prototype, "data", void 0);
let ReservationController = class ReservationController {
    constructor(createReservationUseCase, updateReservationUseCase, getReservationUseCase) {
        this.createReservationUseCase = createReservationUseCase;
        this.updateReservationUseCase = updateReservationUseCase;
        this.getReservationUseCase = getReservationUseCase;
    }
    async create(dto, req) {
        dto.userId = req.user?.user?.id || '';
        if (!dto.userId)
            throw new common_1.BadRequestException('User ID missing from token');
        const result = await this.createReservationUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async update(dto, req) {
        dto.userId = req.user?.user?.id || '';
        if (!dto.userId)
            throw new common_1.BadRequestException('User ID missing from token');
        const result = await this.updateReservationUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async get(id) {
        const result = await this.getReservationUseCase.execute(id);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
};
exports.ReservationController = ReservationController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiBody)({ type: ReservationRequestDto_1.CreateReservationDto }),
    (0, swagger_1.ApiResponse)({ status: 201, type: ReservationResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReservationRequestDto_1.CreateReservationDto, Object]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiBody)({ type: ReservationRequestDto_1.UpdateReservationDto }),
    (0, swagger_1.ApiResponse)({ status: 200, type: ReservationResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReservationRequestDto_1.UpdateReservationDto, Object]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiQuery)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, type: ReservationResponseSchema }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "get", null);
exports.ReservationController = ReservationController = __decorate([
    (0, swagger_1.ApiTags)('reservation'),
    (0, common_1.Controller)('reservation'),
    __metadata("design:paramtypes", [IReservationUseCase_1.CreateReservationUseCase,
        IReservationUseCase_1.UpdateReservationUseCase,
        IReservationUseCase_1.GetReservationUseCase])
], ReservationController);
//# sourceMappingURL=reservation.controller.js.map