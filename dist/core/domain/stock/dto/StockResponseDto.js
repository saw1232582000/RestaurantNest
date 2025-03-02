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
exports.StockResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let StockResponseDto = class StockResponseDto {
    static fromEntity(entity) {
        return {
            id: entity.id,
            productId: entity.productId,
            quantity: entity.quantity,
            unit: entity.unit,
            threshold: entity.threshold,
            createdDate: entity.createdDate,
            updatedDate: entity.updatedDate,
        };
    }
};
exports.StockResponseDto = StockResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid404' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StockResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid303' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StockResponseDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid202' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StockResponseDto.prototype, "ingredientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], StockResponseDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kg' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StockResponseDto.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], StockResponseDto.prototype, "threshold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], StockResponseDto.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], StockResponseDto.prototype, "updatedDate", void 0);
exports.StockResponseDto = StockResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], StockResponseDto);
//# sourceMappingURL=StockResponseDto.js.map