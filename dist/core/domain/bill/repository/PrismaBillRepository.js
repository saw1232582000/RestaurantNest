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
exports.PrismaBillRepository = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const common_2 = require("@nestjs/common");
const PrismaService_1 = require("../../../common/prisma/PrismaService");
const Bill_1 = require("../entity/Bill");
let PrismaBillRepository = class PrismaBillRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(entity) {
        try {
            const result = await this.prisma.bill.create({ data: { ...entity } });
            return new Bill_1.BillEntity(result);
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot create bill');
        }
    }
    async update(entity) {
        try {
            const result = await this.prisma.bill.update({
                where: { id: entity.id },
                data: { ...entity },
            });
            return new Bill_1.BillEntity(result);
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot update bill');
        }
    }
    async find(by) {
        try {
            const result = await this.prisma.bill.findFirst({ where: by });
            return result ? new Bill_1.BillEntity(result) : null;
        }
        catch (e) {
            this.handlePrismaError(e, 'Cannot find bill');
        }
    }
    handlePrismaError(error, message) {
        if (error instanceof library_1.PrismaClientKnownRequestError) {
            if (error.code === 'P2002')
                throw new common_2.BadRequestException(`${message}: Order ID already billed`);
            throw new common_2.BadRequestException(`${message}: ${error.message}`);
        }
        throw new common_2.InternalServerErrorException('An unexpected error occurred');
    }
};
exports.PrismaBillRepository = PrismaBillRepository;
exports.PrismaBillRepository = PrismaBillRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PrismaBillRepository);
//# sourceMappingURL=PrismaBillRepository.js.map