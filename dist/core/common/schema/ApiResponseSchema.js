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
exports.CoreApiResponseSchema = void 0;
const swagger_1 = require("@nestjs/swagger");
class CoreApiResponseSchema {
    constructor(code, message, data, error) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.error = error;
    }
    static success(data, message) {
        return new CoreApiResponseSchema(200, message || 'Success', data);
    }
    static error(code, message, error) {
        return new CoreApiResponseSchema(code || 500, message || 'Internal Server Error', undefined, error);
    }
}
exports.CoreApiResponseSchema = CoreApiResponseSchema;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CoreApiResponseSchema.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CoreApiResponseSchema.prototype, "message", void 0);
//# sourceMappingURL=ApiResponseSchema.js.map