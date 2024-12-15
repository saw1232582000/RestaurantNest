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
exports.UpdateOrderStatusRequestSchema = void 0;
const swagger_1 = require("@nestjs/swagger");
const StatusEnum_1 = require("../../../../../core/common/type/StatusEnum");
const class_validator_1 = require("class-validator");
class UpdateOrderStatusRequestSchema {
}
exports.UpdateOrderStatusRequestSchema = UpdateOrderStatusRequestSchema;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: StatusEnum_1.Status,
        enumName: 'StatusValue',
    }),
    (0, class_validator_1.IsEnum)(StatusEnum_1.Status, { message: 'Valid Status value is required' }),
    __metadata("design:type", String)
], UpdateOrderStatusRequestSchema.prototype, "status", void 0);
//# sourceMappingURL=UpdateOrderStatusRequestSchema.js.map