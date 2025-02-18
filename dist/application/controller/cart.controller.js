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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const AddToCartRequestSchema_1 = require("./documentation/cart/RequestSchema/AddToCartRequestSchema");
const ReoveFromCardRequestSchema_1 = require("./documentation/cart/RequestSchema/ReoveFromCardRequestSchema");
const AddToCartUseCase_1 = require("../../core/domain/cart/service/AddToCartUseCase");
const RemoveFromCartUseCase_1 = require("../../core/domain/cart/service/RemoveFromCartUseCase");
const AddToCartDto_1 = require("../../core/domain/cart/dto/AddToCartDto");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const RemoveFromCartDto_1 = require("../../core/domain/cart/dto/RemoveFromCartDto");
const AddToCartResponseSchema_1 = require("./documentation/cart/ResponseSchema/AddToCartResponseSchema");
const RemoveFromCartResponseSchema_1 = require("./documentation/cart/ResponseSchema/RemoveFromCartResponseSchema");
let CartController = class CartController {
    constructor(addToCartUseCase, removeFromCartUseCase) {
        this.addToCartUseCase = addToCartUseCase;
        this.removeFromCartUseCase = removeFromCartUseCase;
    }
    async addToCart(product, req) {
        const addToCartDto = new AddToCartDto_1.AddToCartDto();
        addToCartDto.productId = product.productId;
        addToCartDto.userId = req.user?.user?.id;
        this.addToCartUseCase.execute(addToCartDto);
        return ApiResponseSchema_1.CoreApiResonseSchema.success({
            message: 'Item added to cart successfully',
        });
    }
    async removeFromCart(product, req) {
        const removeFromCartDto = new RemoveFromCartDto_1.RemoveFromCartDto();
        removeFromCartDto.productId = product.productId;
        removeFromCartDto.userId = req.user?.user?.id;
        this.addToCartUseCase.execute(removeFromCartDto);
        return ApiResponseSchema_1.CoreApiResonseSchema.success({
            message: 'Item removed from cart successfully',
        });
    }
};
exports.CartController = CartController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: AddToCartRequestSchema_1.AddToCartRequestSchema }),
    (0, swagger_1.ApiResponse)({ type: AddToCartResponseSchema_1.AddToCartResponseSchema }),
    (0, common_1.Post)('/AddToCart'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddToCartRequestSchema_1.AddToCartRequestSchema, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: ReoveFromCardRequestSchema_1.RemoveFromCartRequestSchema }),
    (0, swagger_1.ApiResponse)({ type: RemoveFromCartResponseSchema_1.RemoveFromCartResponseSchema }),
    (0, common_1.Post)('/RemoveFromCart'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReoveFromCardRequestSchema_1.RemoveFromCartRequestSchema, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "removeFromCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('Cart'),
    (0, swagger_1.ApiTags)('cart'),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [AddToCartUseCase_1.AddToCartUseCase,
        RemoveFromCartUseCase_1.RemoveFromCartUseCase])
], CartController);
//# sourceMappingURL=cart.controller.js.map