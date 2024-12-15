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
exports.PrismaCartRepository = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const Cart_1 = require("../entity/Cart");
const PrismaService_1 = require("../../../common/prisma/PrismaService");
let PrismaCartRepository = class PrismaCartRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(cart) {
        try {
            const result = await this.prisma.cart.create({
                data: {
                    userId: cart.userId,
                },
            });
            return Cart_1.CartEntity.toEntity(result);
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                throw new common_1.BadRequestException('Bad Request', {
                    cause: new Error(),
                    description: 'Cannot create cart',
                });
            }
            if (e instanceof library_1.PrismaClientValidationError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.message,
                });
            }
        }
    }
    async update(cart) {
        try {
            const result = await this.prisma.cart.update({
                where: { id: cart.id },
                data: {},
            });
            return Cart_1.CartEntity.toEntity(result);
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientValidationError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.message,
                });
            }
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.code,
                });
            }
        }
    }
    async delete(id) {
        try {
            await this.prisma.cart.delete({
                where: { id: id },
            });
            return true;
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientValidationError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.message,
                });
            }
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.code,
                });
            }
        }
    }
    async find(by) {
        try {
            const cart = await this.prisma.cart.findFirst({
                where: {
                    ...by,
                },
                include: {
                    cartItems: {
                        include: {
                            product: {
                                include: {},
                            },
                        },
                    },
                },
            });
            if (cart)
                return Cart_1.CartEntity.toEntity(cart);
            else
                return null;
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientValidationError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.message,
                });
            }
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.code,
                });
            }
        }
    }
    async findAll() {
        const carts = await this.prisma.cart.findMany({});
        return carts.map((cart) => Cart_1.CartEntity.toEntity(cart));
    }
    async addToCart(data) {
        try {
            const cartItem = await this.prisma.cartItem.findFirst({
                where: {
                    cart: { userId: data.userId },
                    productId: data.productId,
                },
            });
            if (cartItem) {
                const cart = await this.prisma.cart.update({
                    where: {
                        id: cartItem.cartId,
                    },
                    data: {
                        cartItems: {
                            update: {
                                where: {
                                    id: cartItem.id,
                                },
                                data: {
                                    quantity: cartItem.quantity + 1,
                                },
                            },
                        },
                    },
                });
                return Cart_1.CartEntity.toEntity(cart);
            }
            else {
                const cart = await this.prisma.cart.update({
                    where: {
                        id: cartItem.cartId,
                    },
                    data: {
                        cartItems: {
                            create: {
                                productId: data.productId,
                                quantity: 1,
                            },
                        },
                    },
                });
                return Cart_1.CartEntity.toEntity(cart);
            }
        }
        catch (e) {
            throw new common_1.InternalServerErrorException('Internal Server Error', {
                cause: new Error(),
                description: 'Cannot add cart item',
            });
        }
    }
    async removeFromCart(data) {
        try {
            const cartItem = await this.prisma.cartItem.findFirst({
                where: {
                    cart: { userId: data.userId },
                    productId: data.productId,
                },
            });
            if (!cartItem) {
                throw new common_1.NotFoundException('Item Not Found', {
                    cause: new Error(),
                    description: 'Cannot remove item from cart',
                });
            }
            if (cartItem.quantity > 1) {
                const cart = await this.prisma.cart.update({
                    where: {
                        id: cartItem.cartId,
                    },
                    data: {
                        cartItems: {
                            update: {
                                where: {
                                    id: cartItem.id,
                                },
                                data: {
                                    quantity: cartItem.quantity - 1,
                                },
                            },
                        },
                    },
                });
                return Cart_1.CartEntity.toEntity(cart);
            }
            else if (cartItem.quantity == 1) {
                const cart = await this.prisma.cart.update({
                    where: {
                        id: cartItem.cartId,
                    },
                    data: {
                        cartItems: {
                            delete: {
                                id: cartItem.id,
                            },
                        },
                    },
                });
                return Cart_1.CartEntity.toEntity(cart);
            }
        }
        catch (e) {
            throw new common_1.InternalServerErrorException('Internal Server Error', {
                cause: new Error(),
                description: 'Cannot add cart item',
            });
        }
    }
};
exports.PrismaCartRepository = PrismaCartRepository;
exports.PrismaCartRepository = PrismaCartRepository = __decorate([
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PrismaCartRepository);
//# sourceMappingURL=PrismaCartRepository.js.map