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
exports.PrismaOrderRepository = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const ApiResponseSchema_1 = require("../../../common/schema/ApiResponseSchema");
const Order_1 = require("../entity/Order");
const StatusEnum_1 = require("../../../common/type/StatusEnum");
const PrismaService_1 = require("../../../common/prisma/PrismaService");
let PrismaOrderRepository = class PrismaOrderRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(order) {
        try {
            const result = await this.prisma.order.create({
                data: {
                    table: order.table,
                    userId: order.userId,
                    status: StatusEnum_1.Status.PROCESSING,
                    orderItems: {
                        createMany: {
                            data: order.orderItems.map((orderItem) => {
                                return {
                                    productId: orderItem.productId,
                                    quantity: orderItem.quantity,
                                    status: StatusEnum_1.Status.PROCESSING,
                                };
                            }),
                        },
                    },
                },
            });
            return Order_1.OrderEntity.toEntity(result);
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                if (e.code == 'P2002') {
                    throw new common_1.BadRequestException(ApiResponseSchema_1.CoreApiResonseSchema.error(common_1.HttpStatus.BAD_REQUEST, 'Bad Request', 'Email already used'));
                }
                else {
                    throw new common_1.BadRequestException('Bad Request', {
                        cause: new Error(),
                        description: 'Cannot create order',
                    });
                }
            }
            if (e instanceof library_1.PrismaClientValidationError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.message,
                });
            }
        }
    }
    async update(order) {
        try {
            const result = await this.prisma.order.update({
                where: { Id: order.Id },
                data: {
                    table: order.table,
                },
            });
            return Order_1.OrderEntity.toEntity(result);
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
    async updateOrderStatus(updateOrderStatusDto) {
        try {
            const result = await this.prisma.order.update({
                where: { Id: updateOrderStatusDto.id },
                data: { status: updateOrderStatusDto.status },
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
    async delete(id) {
        try {
            await this.prisma.order.delete({
                where: { Id: id },
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
            const order = await this.prisma.order.findFirst({
                where: {
                    Id: by.id,
                },
                include: {
                    orderItems: {
                        include: {
                            product: {
                                include: {},
                            },
                        },
                    },
                },
            });
            if (order)
                return Order_1.OrderEntity.toEntity(order);
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
        const orders = await this.prisma.order.findMany({});
        return orders.map((order) => Order_1.OrderEntity.toEntity(order));
    }
    async findAllWithSchema(filter) {
        const filterValue = filter?.startDate && filter?.endDate
            ? {
                status: { contains: filter.status },
                createdDate: {
                    gte: new Date(filter.startDate),
                    lte: new Date(filter.endDate),
                },
            }
            : {
                status: { contains: filter.status },
            };
        const totalCounts = await this.prisma.order.count({
            where: {
                ...filterValue,
            },
        });
        const priceList = await this.prisma.order.findMany({
            where: {
                ...filterValue,
            },
            select: {
                orderItems: {
                    select: {
                        quantity: true,
                        product: {
                            select: {
                                price: true,
                            },
                        },
                    },
                },
            },
        });
        const totalPrice = priceList.reduce((previous, current) => {
            const orderTotal = current.orderItems.reduce((sum, item) => {
                return sum + item.quantity * item.product.price;
            }, 0);
            return previous + orderTotal;
        }, 0);
        const products = await this.prisma.order.findMany({
            where: {
                ...filterValue,
            },
            take: filter.take,
            skip: filter.skip,
            include: {
                orderItems: {
                    include: {
                        product: {
                            include: {},
                        },
                    },
                },
            },
        });
        return {
            orders: products.map((product) => Order_1.OrderEntity.toEntity(product)),
            totalCounts: totalCounts,
            totalPrice: totalPrice,
        };
    }
    async updateOrderItems(updateOrderItemDto) {
        try {
            const targetOrder = await this.prisma.order.findFirst({
                where: {
                    Id: updateOrderItemDto.Id,
                },
                include: {
                    orderItems: true,
                },
            });
            if (!targetOrder) {
                throw new common_1.NotFoundException('Order not found');
            }
            updateOrderItemDto.orderItems.forEach(async (orderItem) => {
                if (targetOrder.orderItems.find((item) => item.Id === orderItem.Id) !==
                    undefined) {
                    await this.prisma.orderItem.update({
                        where: { Id: orderItem.Id },
                        data: {
                            quantity: orderItem.quantity,
                        },
                    });
                }
                else {
                    await this.prisma.orderItem.create({
                        data: {
                            orderId: targetOrder.Id,
                            productId: orderItem.productId,
                            quantity: orderItem.quantity,
                            status: StatusEnum_1.Status.PROCESSING,
                        },
                    });
                }
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
            else {
                throw new common_1.InternalServerErrorException('Something bad happened in nest', {
                    cause: new Error(),
                    description: 'handled error:' + e?.code,
                });
            }
        }
    }
};
exports.PrismaOrderRepository = PrismaOrderRepository;
exports.PrismaOrderRepository = PrismaOrderRepository = __decorate([
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PrismaOrderRepository);
//# sourceMappingURL=PrismaOrderRepository.js.map