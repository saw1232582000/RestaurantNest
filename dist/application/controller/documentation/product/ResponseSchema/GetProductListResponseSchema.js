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
exports.GetProductListResponseSchema = void 0;
const swagger_1 = require("@nestjs/swagger");
const BaseResponseSchema_1 = require("../../common/BaseResponseSchema");
class Product {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Product.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Product.prototype, "updateddDate", void 0);
class GetProductList {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Product] }),
    __metadata("design:type", Array)
], GetProductList.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetProductList.prototype, "totalCount", void 0);
class GetProductListResponseSchema extends BaseResponseSchema_1.BaseResponseSchema {
}
exports.GetProductListResponseSchema = GetProductListResponseSchema;
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetProductList }),
    __metadata("design:type", GetProductList)
], GetProductListResponseSchema.prototype, "data", void 0);
//# sourceMappingURL=GetProductListResponseSchema.js.map