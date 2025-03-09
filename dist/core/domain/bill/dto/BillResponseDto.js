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
exports.BillResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let BillResponseDto = class BillResponseDto {
    static fromEntity(entity) {
        return {
            id: entity.id,
            orderId: entity.orderId,
            totalAmount: entity.totalAmount,
            tax: entity.tax,
            discount: entity.discount,
            finalAmount: entity.finalAmount,
            status: entity.status,
            paymentMethod: entity.paymentMethod,
            createdDate: entity.createdDate,
        };
    }
};
exports.BillResponseDto = BillResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid456' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], BillResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid123' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], BillResponseDto.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100.0 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], BillResponseDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10.0 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], BillResponseDto.prototype, "tax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5.0 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], BillResponseDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 105.0 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], BillResponseDto.prototype, "finalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pending' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], BillResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Card' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], BillResponseDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], BillResponseDto.prototype, "createdDate", void 0);
exports.BillResponseDto = BillResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], BillResponseDto);
//# sourceMappingURL=BillResponseDto.js.map