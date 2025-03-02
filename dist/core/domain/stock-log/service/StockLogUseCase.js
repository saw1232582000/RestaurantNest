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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStockLogUseCaseImpl = exports.CreateStockLogUseCaseImpl = void 0;
const common_1 = require("@nestjs/common");
const IStockLogRepository_1 = require("../port/repository-port/IStockLogRepository");
const StockLog_1 = require("../entity/StockLog");
const StockLogResponseDto_1 = require("../dto/StockLogResponseDto");
let CreateStockLogUseCaseImpl = class CreateStockLogUseCaseImpl {
    constructor(stockLogRepository) {
        this.stockLogRepository = stockLogRepository;
    }
    async execute(dto) {
        const entity = new StockLog_1.StockLogEntity(dto);
        const created = await this.stockLogRepository.create(entity);
        return StockLogResponseDto_1.StockLogResponseDto.fromEntity(created);
    }
};
exports.CreateStockLogUseCaseImpl = CreateStockLogUseCaseImpl;
exports.CreateStockLogUseCaseImpl = CreateStockLogUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IStockLogRepository_1.StockLogRepository])
], CreateStockLogUseCaseImpl);
let GetStockLogUseCaseImpl = class GetStockLogUseCaseImpl {
    constructor(stockLogRepository) {
        this.stockLogRepository = stockLogRepository;
    }
    async execute(id) {
        const stockLog = await this.stockLogRepository.find({ id });
        if (!stockLog)
            throw new common_1.BadRequestException('Stock log not found');
        return stockLog;
    }
};
exports.GetStockLogUseCaseImpl = GetStockLogUseCaseImpl;
exports.GetStockLogUseCaseImpl = GetStockLogUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IStockLogRepository_1.StockLogRepository])
], GetStockLogUseCaseImpl);
//# sourceMappingURL=StockLogUseCase.js.map