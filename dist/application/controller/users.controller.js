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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const CreateUserUsecase_1 = require("../../core/domain/user/service/CreateUserUsecase");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const swagger_1 = require("@nestjs/swagger");
const GetUserUsecase_1 = require("../../core/domain/user/service/GetUserUsecase");
const GetUserResponseSchema_1 = require("./documentation/user/ResponseSchema/GetUserResponseSchema");
const UserFilter_1 = require("../../core/domain/user/dto/UserFilter");
const GetUserListUsecase_1 = require("../../core/domain/user/service/GetUserListUsecase");
const UserFilterSchema_1 = require("./documentation/user/RequsetSchema/UserFilterSchema");
const GetUserListResponseSchema_1 = require("./documentation/user/ResponseSchema/GetUserListResponseSchema");
let UsersController = class UsersController {
    constructor(getUserUseCase, createUserUseCase, getUserListWithFilter) {
        this.getUserUseCase = getUserUseCase;
        this.createUserUseCase = createUserUseCase;
        this.getUserListWithFilter = getUserListWithFilter;
    }
    async findOne(req) {
        return ApiResponseSchema_1.CoreApiResonseSchema.success(await this.getUserUseCase.execute(req.user?.user?.id));
    }
    async getAllByFilter(params) {
        console.log(params);
        const filter = new UserFilter_1.UserFilter(params.name, params.role, parseInt(params?.take.toString()), parseInt(params?.skip.toString()));
        return ApiResponseSchema_1.CoreApiResonseSchema.success(await this.getUserListWithFilter.execute(filter));
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: GetUserResponseSchema_1.GetUserResonseSchema }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: GetUserListResponseSchema_1.GetUserListResponseSchema }),
    (0, common_1.Get)('/getUserList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserFilterSchema_1.UserFilterSchama]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllByFilter", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('User'),
    (0, swagger_1.ApiTags)('users'),
    __metadata("design:paramtypes", [GetUserUsecase_1.GetUserUseCase,
        CreateUserUsecase_1.CreateUserUseCase,
        GetUserListUsecase_1.GetUserListWithFilterUseCase])
], UsersController);
//# sourceMappingURL=users.controller.js.map