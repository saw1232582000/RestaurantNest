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
exports.ProductFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ProductFilterDto {
}
exports.ProductFilterDto = ProductFilterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Pizza' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Food' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 10 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsNumber)({}, { message: 'take must be a number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductFilterDto.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 0 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsNumber)({}, { message: 'skip must be a number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductFilterDto.prototype, "skip", void 0);
//# sourceMappingURL=ProductFilter.js.map