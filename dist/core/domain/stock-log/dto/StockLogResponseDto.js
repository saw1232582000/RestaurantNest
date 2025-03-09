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
exports.StockLogResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let StockLogResponseDto = class StockLogResponseDto {
    static fromEntity(entity) {
        return {
            id: entity.id,
            stockId: entity.stockId,
            quantity: entity.quantity,
            reason: entity.reason,
            createdDate: entity.createdDate,
        };
    }
};
exports.StockLogResponseDto = StockLogResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid505' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StockLogResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid404' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StockLogResponseDto.prototype, "stockId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], StockLogResponseDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Restock' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StockLogResponseDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], StockLogResponseDto.prototype, "createdDate", void 0);
exports.StockLogResponseDto = StockLogResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], StockLogResponseDto);
//# sourceMappingURL=StockLogResponseDto.js.map