"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoucherModule = void 0;
const common_1 = require("@nestjs/common");
const voucher_controller_1 = require("../controller/voucher.controller");
const IVoucherUseCase_1 = require("../../core/domain/voucher/port/service-port/IVoucherUseCase");
const IVoucherRepository_1 = require("../../core/domain/voucher/port/repository-port/IVoucherRepository");
const VoucherUseCase_1 = require("../../core/domain/voucher/service/VoucherUseCase");
const PrismaVoucherRepository_1 = require("../../core/domain/voucher/repository/PrismaVoucherRepository");
const PrismaService_1 = require("../../core/common/prisma/PrismaService");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
let VoucherModule = class VoucherModule {
};
exports.VoucherModule = VoucherModule;
exports.VoucherModule = VoucherModule = __decorate([
    (0, common_1.Module)({
        controllers: [voucher_controller_1.VoucherController],
        providers: [
            { provide: IVoucherUseCase_1.CreateVoucherUseCase, useClass: VoucherUseCase_1.CreateVoucherUseCaseImpl },
            { provide: IVoucherUseCase_1.UpdateVoucherUseCase, useClass: VoucherUseCase_1.UpdateVoucherUseCaseImpl },
            { provide: IVoucherUseCase_1.GetVoucherUseCase, useClass: VoucherUseCase_1.GetVoucherUseCaseImpl },
            { provide: IVoucherRepository_1.VoucherRepository, useClass: PrismaVoucherRepository_1.PrismaVoucherRepository },
            PrismaService_1.PrismaService,
            jwt_guard_1.JwtGuard,
        ],
    })
], VoucherModule);
//# sourceMappingURL=voucher.module.js.map