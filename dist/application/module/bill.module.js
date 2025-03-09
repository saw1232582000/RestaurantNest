"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillModule = void 0;
const common_1 = require("@nestjs/common");
const bill_controller_1 = require("../controller/bill.controller");
const IBillUseCase_1 = require("../../core/domain/bill/port/service-port/IBillUseCase");
const BillUseCase_1 = require("../../core/domain/bill/service/BillUseCase");
const IBillRepository_1 = require("../../core/domain/bill/port/repository-port/IBillRepository");
const PrismaBillRepository_1 = require("../../core/domain/bill/repository/PrismaBillRepository");
const PrismaService_1 = require("../../core/common/prisma/PrismaService");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
let BillModule = class BillModule {
};
exports.BillModule = BillModule;
exports.BillModule = BillModule = __decorate([
    (0, common_1.Module)({
        controllers: [bill_controller_1.BillController],
        providers: [
            { provide: IBillUseCase_1.CreateBillUseCase, useClass: BillUseCase_1.CreateBillUseCaseImpl },
            { provide: IBillUseCase_1.UpdateBillUseCase, useClass: BillUseCase_1.UpdateBillUseCaseImpl },
            { provide: IBillUseCase_1.GetBillUseCase, useClass: BillUseCase_1.GetBillUseCaseImpl },
            { provide: IBillRepository_1.BillRepository, useClass: PrismaBillRepository_1.PrismaBillRepository },
            PrismaService_1.PrismaService,
            jwt_guard_1.JwtGuard,
        ],
    })
], BillModule);
//# sourceMappingURL=bill.module.js.map