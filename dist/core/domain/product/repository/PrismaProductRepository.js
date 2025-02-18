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
exports.PrismaProductRepository = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const ApiResponseSchema_1 = require("../../../common/schema/ApiResponseSchema");
const Product_1 = require("../entity/Product");
const PrismaService_1 = require("../../../common/prisma/PrismaService");
let PrismaProductRepository = class PrismaProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(product) {
        try {
            const result = await this.prisma.product.create({
                data: {
                    name: product.name,
                    category: product.category,
                    description: product.description,
                    image: product.image,
                    price: product.price,
                    userId: product.userId,
                },
            });
            return Product_1.ProductEntity.toEntity(result);
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                if (e.code == 'P2002') {
                    throw new common_1.BadRequestException(ApiResponseSchema_1.CoreApiResonseSchema.error(common_1.HttpStatus.BAD_REQUEST, 'Bad Request', 'Email already used'));
                }
                else {
                    throw new common_1.BadRequestException('Bad Request', {
                        cause: new Error(),
                        description: 'Cannot create product',
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
    async update(product) {
        try {
            const result = await this.prisma.product.update({
                where: { id: product.id },
                data: {
                    name: product.name,
                    category: product.category,
                    description: product.description,
                    price: product.price,
                    userId: product.userId,
                    updatedDate: new Date(),
                },
            });
            return Product_1.ProductEntity.toEntity(result);
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
            await this.prisma.product.delete({
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
            const product = await this.prisma.product.findFirst({
                where: {
                    ...by,
                },
            });
            if (product)
                return Product_1.ProductEntity.toEntity(product);
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
        const products = await this.prisma.product.findMany({});
        return products.map((product) => Product_1.ProductEntity.toEntity(product));
    }
    async findAllWithSchema(filter) {
        const totalCounts = await this.prisma.product.count({
            where: {
                name: { contains: filter.name },
                category: {
                    contains: filter.category,
                },
            },
        });
        const products = await this.prisma.product.findMany({
            where: {
                name: { contains: filter.name },
                category: {
                    contains: filter.category,
                },
            },
            take: filter.take,
            skip: filter.skip,
        });
        return {
            products: products.map((product) => Product_1.ProductEntity.toEntity(product)),
            totalCounts: totalCounts,
        };
    }
};
exports.PrismaProductRepository = PrismaProductRepository;
exports.PrismaProductRepository = PrismaProductRepository = __decorate([
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PrismaProductRepository);
//# sourceMappingURL=PrismaProductRepository.js.map