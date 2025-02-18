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
exports.GetDailyBuyingListResponseSchema = void 0;
const swagger_1 = require("@nestjs/swagger");
const BaseResponseSchema_1 = require("../../common/BaseResponseSchema");
class DailyBuying {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DailyBuying.prototype, "Id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DailyBuying.prototype, "particular", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DailyBuying.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DailyBuying.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DailyBuying.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DailyBuying.prototype, "Amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DailyBuying.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DailyBuying.prototype, "updatedDate", void 0);
class GetDailyBuyingList {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [DailyBuying] }),
    __metadata("design:type", Array)
], GetDailyBuyingList.prototype, "DailyBuyings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetDailyBuyingList.prototype, "totalCount", void 0);
class GetDailyBuyingListResponseSchema extends BaseResponseSchema_1.BaseResponseSchema {
}
exports.GetDailyBuyingListResponseSchema = GetDailyBuyingListResponseSchema;
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetDailyBuyingList }),
    __metadata("design:type", GetDailyBuyingList)
], GetDailyBuyingListResponseSchema.prototype, "data", void 0);
//# sourceMappingURL=GetDailyBuyingListResponseSchema.js.map