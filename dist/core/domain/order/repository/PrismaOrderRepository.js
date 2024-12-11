"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrderRepository = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const ApiResponseSchema_1 = require("../../../common/schema/ApiResponseSchema");
const Order_1 = require("../entity/Order");
const StatusEnum_1 = require("../../../common/type/StatusEnum");
class PrismaOrderRepository {
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
                console.log(e);
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
        console.log(filter);
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
        console.log(products);
        return {
            orders: products.map((product) => Order_1.OrderEntity.toEntity(product)),
            totalCounts: totalCounts,
        };
    }
}
exports.PrismaOrderRepository = PrismaOrderRepository;
//# sourceMappingURL=PrismaOrderRepository.js.map