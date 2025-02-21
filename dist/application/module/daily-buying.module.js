"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyBuyingModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const UploadS3Service_1 = require("../../core/common/file-upload/UploadS3Service");
const daily_buying_controller_1 = require("../controller/daily-buying.controller");
const CreateDailyBuyingUseCase_1 = require("../../core/domain/daily-buying/service/CreateDailyBuyingUseCase");
const UpdateDailyBuyingUseCase_1 = require("../../core/domain/daily-buying/service/UpdateDailyBuyingUseCase");
const GetDailyBuyingUseCase_1 = require("../../core/domain/daily-buying/service/GetDailyBuyingUseCase");
const GetDailyBuyingListUseCase_1 = require("../../core/domain/daily-buying/service/GetDailyBuyingListUseCase");
const IDailyBuyingRepository_1 = require("../../core/domain/daily-buying/port/repository-port/IDailyBuyingRepository");
const PrismaDailyBuyingRepository_1 = require("../../core/domain/daily-buying/repository/PrismaDailyBuyingRepository");
const ICreateManyDailyBuyingUseCase_1 = require("../../core/domain/daily-buying/port/service-port/ICreateManyDailyBuyingUseCase");
let DailyBuyingModule = class DailyBuyingModule {
};
exports.DailyBuyingModule = DailyBuyingModule;
exports.DailyBuyingModule = DailyBuyingModule = __decorate([
    (0, common_1.Module)({
        controllers: [daily_buying_controller_1.DailyBuyingController],
        providers: [
            CreateDailyBuyingUseCase_1.CreateDailyBuyingUseCase,
            UpdateDailyBuyingUseCase_1.UpdateDailyBuyingUseCase,
            GetDailyBuyingUseCase_1.GetDailyBuyingUseCase,
            GetDailyBuyingListUseCase_1.GetDailyBuyingListUseCase,
            GetDailyBuyingListUseCase_1.GetDailyBuyingListWithFilterUseCase,
            jwt_guard_1.JwtGuard,
            UploadS3Service_1.S3Service,
            {
                provide: IDailyBuyingRepository_1.IDailyBuyingRepository,
                useClass: PrismaDailyBuyingRepository_1.PrismaDailyBuyingRepository,
            },
            {
                provide: ICreateManyDailyBuyingUseCase_1.ICreateManyDailyBuyingUseCase,
                useClass: CreateDailyBuyingUseCase_1.CreateManyDailyBuyingUseCase,
            },
        ],
    })
], DailyBuyingModule);
//# sourceMappingURL=daily-buying.module.js.map