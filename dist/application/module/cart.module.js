"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const cart_controller_1 = require("../controller/cart.controller");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const AddToCartUseCase_1 = require("../../core/domain/cart/service/AddToCartUseCase");
const RemoveFromCartUseCase_1 = require("../../core/domain/cart/service/RemoveFromCartUseCase");
const ICartRepository_1 = require("../../core/domain/cart/port/repository-port/ICartRepository");
const PrismaCartRepository_1 = require("../../core/domain/cart/repository/PrismaCartRepository");
let CartModule = class CartModule {
};
exports.CartModule = CartModule;
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        controllers: [cart_controller_1.CartController],
        providers: [
            jwt_guard_1.JwtGuard,
            AddToCartUseCase_1.AddToCartUseCase,
            RemoveFromCartUseCase_1.RemoveFromCartUseCase,
            {
                provide: ICartRepository_1.ICartRepository,
                useClass: PrismaCartRepository_1.PrismaCartRepository
            }
        ],
    })
], CartModule);
//# sourceMappingURL=cart.module.js.map