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
exports.ReservationResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let ReservationResponseDto = class ReservationResponseDto {
    static fromEntity(entity) {
        return {
            id: entity.id,
            userId: entity.userId,
            customerName: entity.customerName,
            phone: entity.phone,
            table: entity.table,
            reservationTime: entity.reservationTime,
            status: entity.status,
            createdDate: entity.createdDate,
            updatedDate: entity.updatedDate,
        };
    }
};
exports.ReservationResponseDto = ReservationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid101' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user123' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Table 5' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "table", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T18:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], ReservationResponseDto.prototype, "reservationTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pending' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], ReservationResponseDto.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], ReservationResponseDto.prototype, "updatedDate", void 0);
exports.ReservationResponseDto = ReservationResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ReservationResponseDto);
//# sourceMappingURL=ReservationResponseDto.js.map