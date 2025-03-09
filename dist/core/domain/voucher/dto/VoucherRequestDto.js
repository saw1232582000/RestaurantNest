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
exports.UpdateVoucherDto = exports.CreateVoucherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateVoucherDto {
    constructor(data) {
        this.code = data.code || '';
        this.discount = data.discount || 0;
        this.expiryDate = data.expiryDate || '';
        this.isActive = data.isActive ?? true;
    }
}
exports.CreateVoucherDto = CreateVoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher code', example: 'SAVE10' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount amount', example: 10.0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Expiry date',
        example: '2025-12-31T00:00:00.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "expiryDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active status', example: true, required: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "isActive", void 0);
class UpdateVoucherDto {
    constructor(data) {
        this.id = data.id || '';
        this.code = data.code || '';
        this.discount = data.discount || 0;
        this.expiryDate = data.expiryDate || '';
        this.isActive = data.isActive ?? true;
    }
}
exports.UpdateVoucherDto = UpdateVoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher ID', example: 'cuid789' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher code', example: 'SAVE10' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount amount', example: 10.0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Expiry date',
        example: '2025-12-31T00:00:00.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "expiryDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active status', example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], UpdateVoucherDto.prototype, "isActive", void 0);
//# sourceMappingURL=VoucherRequestDto.js.map