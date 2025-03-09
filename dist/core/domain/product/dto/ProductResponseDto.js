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
exports.ProductResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let ProductResponseDto = class ProductResponseDto {
    static fromEntity(entity) {
        return {
            id: entity.id,
            userId: entity.userId,
            name: entity.name,
            price: entity.price,
            image: entity.image,
            description: entity.description,
            category: entity.category,
            createdDate: entity.createdDate,
            updatedDate: entity.updatedDate,
        };
    }
};
exports.ProductResponseDto = ProductResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid123' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user123' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pizza' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/pizza.jpg' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delicious cheese pizza' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Food' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], ProductResponseDto.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], ProductResponseDto.prototype, "updatedDate", void 0);
exports.ProductResponseDto = ProductResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ProductResponseDto);
//# sourceMappingURL=ProductResponseDto.js.map