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
exports.CreateDailyBuyingDto = void 0;
const class_transformer_1 = require("class-transformer");
class CreateDailyBuyingDto {
    static convertToClass(DailyBuying) {
        return (0, class_transformer_1.plainToInstance)(CreateDailyBuyingDto, DailyBuying, {
            excludeExtraneousValues: true,
        });
    }
}
exports.CreateDailyBuyingDto = CreateDailyBuyingDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], CreateDailyBuyingDto.prototype, "Id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateDailyBuyingDto.prototype, "particular", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateDailyBuyingDto.prototype, "unit", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CreateDailyBuyingDto.prototype, "price", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CreateDailyBuyingDto.prototype, "quantity", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CreateDailyBuyingDto.prototype, "Amount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateDailyBuyingDto.prototype, "category", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], CreateDailyBuyingDto.prototype, "createdDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], CreateDailyBuyingDto.prototype, "updatedDate", void 0);
//# sourceMappingURL=CreateDailyBuyingDto.js.map