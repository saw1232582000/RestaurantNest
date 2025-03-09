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
exports.PrismaStockRepository = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const common_2 = require("@nestjs/common");
const PrismaService_1 = require("../../../common/prisma/PrismaService");
const Stock_1 = require("../entity/Stock");
let PrismaStockRepository = class PrismaStockRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(entity) {
        try {
            const result = await this.prisma.stock.create({
                data: {
                    ingredientName: entity.ingredientName,
                    quantity: entity.quantity,
                    unit: entity.unit,
                    threshold: entity.threshold,
                    createdDate: entity.createdDate,
                    updatedDate: entity.updatedDate,
                },
            });
            return new Stock_1.StockEntity(result);
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot create stock');
        }
    }
    async update(entity) {
        try {
            const result = await this.prisma.stock.update({
                where: { id: entity.id },
                data: { ...entity, updatedDate: new Date() },
            });
            return new Stock_1.StockEntity(result);
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot update stock');
        }
    }
    async find(by) {
        try {
            const result = await this.prisma.stock.findFirst({ where: by });
            return result ? new Stock_1.StockEntity(result) : null;
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot find stock');
        }
    }
    async findAll(filter) {
        try {
            const where = {};
            console.log(filter);
            if (filter?.ingredientName) {
                where.ingredientName = {
                    contains: filter.ingredientName,
                    mode: 'insensitive',
                };
            }
            if (filter?.unit) {
                where.unit = {
                    equals: filter.unit,
                    mode: 'insensitive',
                };
            }
            let total = await this.prisma.stock.count({ where });
            let results = await this.prisma.stock.findMany({
                where,
                orderBy: { ingredientName: 'asc' },
                take: filter?.take,
                skip: filter?.skip,
            });
            if (filter?.belowThreshold) {
                results = results.filter((stock) => stock.threshold !== null && stock.quantity < stock.threshold);
            }
            return {
                stocks: results.map((result) => new Stock_1.StockEntity(result)),
                total: total,
            };
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot find stocks');
        }
    }
    handlePrismaError(error, message) {
        if (error instanceof library_1.PrismaClientKnownRequestError) {
            if (error.code === 'P2002')
                throw new common_2.BadRequestException(`${message}: Unique constraint failed`);
            throw new common_2.BadRequestException(`${message}: ${error.message}`);
        }
        throw new common_2.InternalServerErrorException('An unexpected error occurred');
    }
};
exports.PrismaStockRepository = PrismaStockRepository;
exports.PrismaStockRepository = PrismaStockRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PrismaStockRepository);
//# sourceMappingURL=PrismaStockRepository.js.map