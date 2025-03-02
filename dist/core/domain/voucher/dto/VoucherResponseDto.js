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
exports.VoucherResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let VoucherResponseDto = class VoucherResponseDto {
    static fromEntity(entity) {
        return {
            id: entity.id,
            code: entity.code,
            discount: entity.discount,
            expiryDate: entity.expiryDate,
            isActive: entity.isActive,
            createdDate: entity.createdDate,
        };
    }
};
exports.VoucherResponseDto = VoucherResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid789' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], VoucherResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SAVE10' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], VoucherResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10.0 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], VoucherResponseDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-12-31T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], VoucherResponseDto.prototype, "expiryDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], VoucherResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], VoucherResponseDto.prototype, "createdDate", void 0);
exports.VoucherResponseDto = VoucherResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], VoucherResponseDto);
//# sourceMappingURL=VoucherResponseDto.js.map