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
exports.GetStockListDto = exports.UpdateStockDto = exports.CreateStockDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateStockDto {
}
exports.CreateStockDto = CreateStockDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingredient Name',
        example: 'Salt',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStockDto.prototype, "ingredientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity', example: 100 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateStockDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit', example: 'kg' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStockDto.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Threshold', example: 10, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateStockDto.prototype, "threshold", void 0);
class UpdateStockDto {
    constructor(data) {
        this.id = data.id || '';
        this.ingredientName = data.ingredientName;
        this.quantity = data.quantity;
        this.unit = data.unit;
        this.threshold = data.threshold;
    }
}
exports.UpdateStockDto = UpdateStockDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock ID', example: 'cuid404' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStockDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingredient Name',
        example: 'Salt',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStockDto.prototype, "ingredientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity', example: 100, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateStockDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit', example: 'kg', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStockDto.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Threshold', example: 10, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateStockDto.prototype, "threshold", void 0);
class GetStockListDto {
}
exports.GetStockListDto = GetStockListDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingredient Name',
        example: 'Salt',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetStockListDto.prototype, "ingredientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit', example: 'kg', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetStockListDto.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Below Threshold',
        example: true,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], GetStockListDto.prototype, "belowThreshold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 10 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsNumber)({}, { message: 'take must be a number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetStockListDto.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 0 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsNumber)({}, { message: 'skip must be a number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetStockListDto.prototype, "skip", void 0);
//# sourceMappingURL=StockRequestDto.js.map