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
exports.DailyBuyingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const CreateDailyBuyingUseCase_1 = require("../../core/domain/daily-buying/service/CreateDailyBuyingUseCase");
const UpdateDailyBuyingUseCase_1 = require("../../core/domain/daily-buying/service/UpdateDailyBuyingUseCase");
const GetDailyBuyingUseCase_1 = require("../../core/domain/daily-buying/service/GetDailyBuyingUseCase");
const GetDailyBuyingListUseCase_1 = require("../../core/domain/daily-buying/service/GetDailyBuyingListUseCase");
const UpdateDailyBuyingDto_1 = require("../../core/domain/daily-buying/dto/UpdateDailyBuyingDto");
const CreateDailyBuyingRequestSchema_1 = require("./documentation/daily-buying/RequestSchema/CreateDailyBuyingRequestSchema");
const CreateDailyBuyingResponseSchema_1 = require("./documentation/daily-buying/ResponseSchema/CreateDailyBuyingResponseSchema");
const CreateDailyBuyingDto_1 = require("../../core/domain/daily-buying/dto/CreateDailyBuyingDto");
const BaseRequestQuerySchema_1 = require("./documentation/common/BaseRequestQuerySchema");
const UpdateDailyBuyingResponseSchema_1 = require("./documentation/daily-buying/ResponseSchema/UpdateDailyBuyingResponseSchema");
const GetDailyBuyingResponseSchema_1 = require("./documentation/daily-buying/ResponseSchema/GetDailyBuyingResponseSchema");
const GetDailyBuyingListResponseSchema_1 = require("./documentation/daily-buying/ResponseSchema/GetDailyBuyingListResponseSchema");
const DailyBuyingFilterSchema_1 = require("./documentation/daily-buying/RequestSchema/DailyBuyingFilterSchema");
const CreateManyDailyBuyingReqeustSchema_1 = require("./documentation/daily-buying/RequestSchema/CreateManyDailyBuyingReqeustSchema");
const ICreateManyDailyBuyingUseCase_1 = require("../../core/domain/daily-buying/port/service-port/ICreateManyDailyBuyingUseCase");
const CreateManyDailyBuyingDto_1 = require("../../core/domain/daily-buying/dto/CreateManyDailyBuyingDto");
let DailyBuyingController = class DailyBuyingController {
    constructor(createDailyBuyingUseCase, updateDailyBuyingUsecase, getDailyBuyingUsecase, getDailyBuyingListUsecase, getDailyBuyingListWithFilter, createManyDailyBuyingUseCase) {
        this.createDailyBuyingUseCase = createDailyBuyingUseCase;
        this.updateDailyBuyingUsecase = updateDailyBuyingUsecase;
        this.getDailyBuyingUsecase = getDailyBuyingUsecase;
        this.getDailyBuyingListUsecase = getDailyBuyingListUsecase;
        this.getDailyBuyingListWithFilter = getDailyBuyingListWithFilter;
        this.createManyDailyBuyingUseCase = createManyDailyBuyingUseCase;
    }
    async create(dailyBuying, req) {
        const createDailyBuyingDto = new CreateDailyBuyingDto_1.CreateDailyBuyingDto();
        createDailyBuyingDto.particular = dailyBuying.particular;
        createDailyBuyingDto.unit = dailyBuying.unit;
        createDailyBuyingDto.quantity = dailyBuying.quantity;
        createDailyBuyingDto.Amount = dailyBuying.Amount;
        createDailyBuyingDto.price = dailyBuying.price;
        return ApiResponseSchema_1.CoreApiResponseSchema.success(await this.createDailyBuyingUseCase.execute(createDailyBuyingDto));
    }
    async createMany(dailyBuyings, req) {
        const createManyDailyBuyingDto = new CreateManyDailyBuyingDto_1.CreateManyDailyBuyingDto();
        createManyDailyBuyingDto.DailyBuyings = dailyBuyings.DailyBuyings.map((dailyBuying) => {
            const createDailyBuyingDto = new CreateDailyBuyingDto_1.CreateDailyBuyingDto();
            createDailyBuyingDto.particular = dailyBuying.particular;
            createDailyBuyingDto.unit = dailyBuying.unit;
            createDailyBuyingDto.quantity = dailyBuying.quantity;
            createDailyBuyingDto.Amount = dailyBuying.Amount;
            createDailyBuyingDto.price = dailyBuying.price;
            return createDailyBuyingDto;
        });
        return ApiResponseSchema_1.CoreApiResponseSchema.success(await this.createManyDailyBuyingUseCase.execute(createManyDailyBuyingDto));
    }
    async update(dailyBuying, req, params) {
        const updateDailyBuyingDto = new UpdateDailyBuyingDto_1.UpdateDailyBuyingDto();
        updateDailyBuyingDto.Id = params.id;
        updateDailyBuyingDto.particular = dailyBuying.particular;
        updateDailyBuyingDto.unit = dailyBuying.unit;
        updateDailyBuyingDto.Amount = dailyBuying.Amount;
        updateDailyBuyingDto.price = dailyBuying.price;
        updateDailyBuyingDto.quantity = dailyBuying.quantity;
        return ApiResponseSchema_1.CoreApiResponseSchema.success(await this.updateDailyBuyingUsecase.execute(updateDailyBuyingDto));
    }
    async get(req, params) {
        return ApiResponseSchema_1.CoreApiResponseSchema.success(await this.getDailyBuyingUsecase.execute(params.id));
    }
    async getAll() {
        return ApiResponseSchema_1.CoreApiResponseSchema.success(await this.getDailyBuyingListUsecase.execute());
    }
    async getAllByFilter(params) {
        let filterDate = undefined;
        if (params.date) {
            if (/^\d{4}-\d{2}-\d{2}$/.test(params.date)) {
                filterDate = new Date(params.date);
                filterDate.setHours(0, 0, 0, 0);
            }
            else {
                console.warn(`Invalid date format received: ${params.date}. Expected YYYY-MM-DD.`);
            }
        }
        else {
            filterDate = new Date();
            filterDate.setHours(0, 0, 0, 0);
        }
        const filter = {
            particular: params.particular || '',
            take: parseInt(params?.take?.toString() || '10'),
            skip: parseInt(params?.skip?.toString() || '0'),
            date: filterDate,
        };
        return ApiResponseSchema_1.CoreApiResponseSchema.success(await this.getDailyBuyingListWithFilter.execute(filter));
    }
};
exports.DailyBuyingController = DailyBuyingController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: CreateDailyBuyingRequestSchema_1.CreateDailyBuyingSchema }),
    (0, swagger_1.ApiResponse)({ type: CreateDailyBuyingResponseSchema_1.CreateDailyBuyingResponseSchema }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDailyBuyingRequestSchema_1.CreateDailyBuyingSchema, Object]),
    __metadata("design:returntype", Promise)
], DailyBuyingController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: CreateManyDailyBuyingReqeustSchema_1.CreateManyDailyBuyingSchema }),
    (0, swagger_1.ApiResponse)({ type: CreateDailyBuyingResponseSchema_1.CreateDailyBuyingResponseSchema }),
    (0, common_1.Post)('/createMany'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: false,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }))),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateManyDailyBuyingReqeustSchema_1.CreateManyDailyBuyingSchema, Object]),
    __metadata("design:returntype", Promise)
], DailyBuyingController.prototype, "createMany", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: CreateDailyBuyingRequestSchema_1.CreateDailyBuyingSchema }),
    (0, swagger_1.ApiQuery)({ type: BaseRequestQuerySchema_1.BaseRequestQuerySchema }),
    (0, swagger_1.ApiResponse)({ type: UpdateDailyBuyingResponseSchema_1.UpdateDailyBuyingResponseSchema }),
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDailyBuyingRequestSchema_1.CreateDailyBuyingSchema, Object, Object]),
    __metadata("design:returntype", Promise)
], DailyBuyingController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiQuery)({ type: BaseRequestQuerySchema_1.BaseRequestQuerySchema }),
    (0, swagger_1.ApiResponse)({ type: GetDailyBuyingResponseSchema_1.GetDailyBuyingResponseSchema }),
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DailyBuyingController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: GetDailyBuyingListResponseSchema_1.GetDailyBuyingListResponseSchema }),
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DailyBuyingController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: GetDailyBuyingListResponseSchema_1.GetDailyBuyingListResponseSchema }),
    (0, common_1.Get)('/getDailyBuyingListByName'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DailyBuyingFilterSchema_1.DailyBuyingFilterSchama]),
    __metadata("design:returntype", Promise)
], DailyBuyingController.prototype, "getAllByFilter", null);
exports.DailyBuyingController = DailyBuyingController = __decorate([
    (0, common_1.Controller)('DailyBuying'),
    (0, swagger_1.ApiTags)('DailyBuying'),
    __metadata("design:paramtypes", [CreateDailyBuyingUseCase_1.CreateDailyBuyingUseCase,
        UpdateDailyBuyingUseCase_1.UpdateDailyBuyingUseCase,
        GetDailyBuyingUseCase_1.GetDailyBuyingUseCase,
        GetDailyBuyingListUseCase_1.GetDailyBuyingListUseCase,
        GetDailyBuyingListUseCase_1.GetDailyBuyingListWithFilterUseCase,
        ICreateManyDailyBuyingUseCase_1.ICreateManyDailyBuyingUseCase])
], DailyBuyingController);
//# sourceMappingURL=daily-buying.controller.js.map