"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const stock_controller_1 = require("../controller/stock.controller");
const IStockUseCase_1 = require("../../core/domain/stock/port/service-port/IStockUseCase");
const IStockRepository_1 = require("../../core/domain/stock/port/repository-port/IStockRepository");
const StockUseCase_1 = require("../../core/domain/stock/service/StockUseCase");
const PrismaStockRepository_1 = require("../../core/domain/stock/repository/PrismaStockRepository");
const PrismaService_1 = require("../../core/common/prisma/PrismaService");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
let StockModule = class StockModule {
};
exports.StockModule = StockModule;
exports.StockModule = StockModule = __decorate([
    (0, common_1.Module)({
        controllers: [stock_controller_1.StockController],
        providers: [
            { provide: IStockUseCase_1.CreateStockUseCase, useClass: StockUseCase_1.CreateStockUseCaseImpl },
            { provide: IStockUseCase_1.UpdateStockUseCase, useClass: StockUseCase_1.UpdateStockUseCaseImpl },
            { provide: IStockUseCase_1.GetStockUseCase, useClass: StockUseCase_1.GetStockUseCaseImpl },
            { provide: IStockUseCase_1.GetStockListUseCase, useClass: StockUseCase_1.GetStockListUseCaseImpl },
            { provide: IStockRepository_1.StockRepository, useClass: PrismaStockRepository_1.PrismaStockRepository },
            PrismaService_1.PrismaService,
            jwt_guard_1.JwtGuard,
        ],
    })
], StockModule);
//# sourceMappingURL=stock.module.js.map