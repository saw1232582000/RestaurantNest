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
exports.UserFilterSchama = void 0;
const swagger_1 = require("@nestjs/swagger");
const BaseFilterSchema_1 = require("../../common/BaseFilterSchema");
const UserEnum_1 = require("../../../../../core/common/type/UserEnum");
const class_validator_1 = require("class-validator");
class UserFilterSchama extends BaseFilterSchema_1.BaseFilterSchema {
}
exports.UserFilterSchama = UserFilterSchama;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserFilterSchama.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: UserEnum_1.UserRole,
        enumName: 'UserRole',
    }),
    (0, class_validator_1.IsEnum)(UserEnum_1.UserRole, { message: 'Valid User Role value is required' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserFilterSchama.prototype, "role", void 0);
//# sourceMappingURL=UserFilterSchema.js.map