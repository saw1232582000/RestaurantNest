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
exports.GetStockUseCaseImpl = exports.UpdateStockUseCaseImpl = exports.CreateStockUseCaseImpl = void 0;
const common_1 = require("@nestjs/common");
const IStockRepository_1 = require("../port/repository-port/IStockRepository");
const StockResponseDto_1 = require("../dto/StockResponseDto");
const Stock_1 = require("../entity/Stock");
let CreateStockUseCaseImpl = class CreateStockUseCaseImpl {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    async execute(dto) {
        const entity = new Stock_1.StockEntity(dto);
        const created = await this.stockRepository.create(entity);
        return StockResponseDto_1.StockResponseDto.fromEntity(created);
    }
};
exports.CreateStockUseCaseImpl = CreateStockUseCaseImpl;
exports.CreateStockUseCaseImpl = CreateStockUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IStockRepository_1.StockRepository])
], CreateStockUseCaseImpl);
let UpdateStockUseCaseImpl = class UpdateStockUseCaseImpl {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    async execute(dto) {
        const entity = new Stock_1.StockEntity(dto);
        const updated = await this.stockRepository.update(entity);
        return StockResponseDto_1.StockResponseDto.fromEntity(updated);
    }
};
exports.UpdateStockUseCaseImpl = UpdateStockUseCaseImpl;
exports.UpdateStockUseCaseImpl = UpdateStockUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IStockRepository_1.StockRepository])
], UpdateStockUseCaseImpl);
let GetStockUseCaseImpl = class GetStockUseCaseImpl {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    async execute(id) {
        const stock = await this.stockRepository.find({ id });
        if (!stock)
            throw new common_1.BadRequestException('Stock not found');
        return StockResponseDto_1.StockResponseDto.fromEntity(stock);
    }
};
exports.GetStockUseCaseImpl = GetStockUseCaseImpl;
exports.GetStockUseCaseImpl = GetStockUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IStockRepository_1.StockRepository])
], GetStockUseCaseImpl);
//# sourceMappingURL=StockUseCase.js.map