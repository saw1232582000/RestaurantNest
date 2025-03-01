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
exports.PrismaProductRepository = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const common_2 = require("@nestjs/common");
const PrismaService_1 = require("../../../common/prisma/PrismaService");
const Product_1 = require("../entity/Product");
let PrismaProductRepository = class PrismaProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(entity) {
        try {
            const result = await this.prisma.product.create({
                data: { ...entity },
            });
            return new Product_1.ProductEntity(result);
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot create product');
        }
    }
    async update(entity) {
        try {
            const result = await this.prisma.product.update({
                where: { id: entity.id },
                data: { ...entity, updatedDate: new Date() },
            });
            return new Product_1.ProductEntity(result);
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot update product');
        }
    }
    async delete(id) {
        try {
            await this.prisma.product.delete({ where: { id } });
            return true;
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot delete product');
        }
    }
    async find(by) {
        try {
            const result = await this.prisma.product.findFirst({ where: by });
            return result ? new Product_1.ProductEntity(result) : null;
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot find product');
        }
    }
    async findAll() {
        try {
            const results = await this.prisma.product.findMany();
            return results.map((r) => new Product_1.ProductEntity(r));
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot fetch products');
        }
    }
    async findAllWithFilter(filter) {
        try {
            const [totalCounts, products] = await Promise.all([
                this.prisma.product.count({
                    where: {
                        name: { contains: filter.name },
                        category: { contains: filter.category },
                    },
                }),
                this.prisma.product.findMany({
                    where: {
                        name: { contains: filter.name },
                        category: { contains: filter.category },
                    },
                    take: filter.take,
                    skip: filter.skip,
                }),
            ]);
            return {
                products: products.map((p) => new Product_1.ProductEntity(p)),
                totalCounts,
            };
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot fetch filtered products');
        }
    }
    handlePrismaError(error, message) {
        if (error instanceof library_1.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new common_2.BadRequestException(`${message}: Name already exists`);
            }
            throw new common_2.BadRequestException(`${message}: ${error.message}`);
        }
        throw new common_2.InternalServerErrorException('An unexpected error occurred');
    }
};
exports.PrismaProductRepository = PrismaProductRepository;
exports.PrismaProductRepository = PrismaProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PrismaProductRepository);
//# sourceMappingURL=PrismaProductRepository.js.map