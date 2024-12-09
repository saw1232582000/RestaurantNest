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
exports.AuthResponseSchema = void 0;
const swagger_1 = require("@nestjs/swagger");
const BaseResponseSchema_1 = require("../../common/BaseResponseSchema");
class AuthResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], AuthResponse.prototype, "token", void 0);
class AuthResponseSchema extends BaseResponseSchema_1.BaseResponseSchema {
    constructor(token) {
        super();
        this.data = { token: token };
    }
}
exports.AuthResponseSchema = AuthResponseSchema;
__decorate([
    (0, swagger_1.ApiProperty)({ type: AuthResponse }),
    __metadata("design:type", AuthResponse)
], AuthResponseSchema.prototype, "data", void 0);
//# sourceMappingURL=AuthResponseSchema.js.map