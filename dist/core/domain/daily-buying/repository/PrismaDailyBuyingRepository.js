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
exports.PrismaDailyBuyingRepository = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const ApiResponseSchema_1 = require("../../../common/schema/ApiResponseSchema");
const DailyBuying_1 = require("../entity/DailyBuying");
const PrismaService_1 = require("../../../common/prisma/PrismaService");
let PrismaDailyBuyingRepository = class PrismaDailyBuyingRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dailyBuying) {
        try {
            const result = await this.prisma.dailyBuying.create({
                data: {
                    particular: dailyBuying.particular,
                    unit: dailyBuying.unit,
                    quantity: dailyBuying.quantity,
                    Amount: dailyBuying.Amount,
                    price: dailyBuying.price,
                },
            });
            return DailyBuying_1.DailyBuyingEntity.toEntity(result);
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                if (e.code == 'P2002') {
                    throw new common_1.BadRequestException(ApiResponseSchema_1.CoreApiResonseSchema.error(common_1.HttpStatus.BAD_REQUEST, 'Bad Request', 'Email already used'));
                }
                else {
                    throw new common_1.BadRequestException('Bad Request', {
                        cause: new Error(),
                        description: 'Cannot create DailyBuying',
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
    async createMany(dailyBuyings) {
        try {
            await this.prisma.dailyBuying.createMany({
                data: dailyBuyings.map((db) => {
                    return {
                        particular: db.particular,
                        unit: db.unit,
                        quantity: db.quantity,
                        Amount: db.Amount,
                        price: db.price,
                    };
                }),
            });
            return 'Daily buyings created successfully';
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                if (e.code == 'P2002') {
                    throw new common_1.BadRequestException(ApiResponseSchema_1.CoreApiResonseSchema.error(common_1.HttpStatus.BAD_REQUEST, 'Bad Request', 'Email already used'));
                }
                else {
                    throw new common_1.BadRequestException('Bad Request', {
                        cause: new Error(),
                        description: 'Cannot create DailyBuying',
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
    async update(dailyBuying) {
        try {
            console.log(dailyBuying);
            const result = await this.prisma.dailyBuying.update({
                where: { Id: dailyBuying.Id },
                data: {
                    particular: dailyBuying.particular,
                    unit: dailyBuying.unit,
                    quantity: dailyBuying.quantity,
                    price: dailyBuying.price,
                    Amount: dailyBuying.Amount,
                    updatedDate: new Date(),
                },
            });
            return DailyBuying_1.DailyBuyingEntity.toEntity(result);
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
    async delete(Id) {
        try {
            await this.prisma.dailyBuying.delete({
                where: { Id: Id },
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
            const dailyBuying = await this.prisma.dailyBuying.findFirst({
                where: {
                    ...by,
                },
            });
            if (dailyBuying)
                return DailyBuying_1.DailyBuyingEntity.toEntity(dailyBuying);
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
        const dailyBuyings = await this.prisma.dailyBuying.findMany({});
        return dailyBuyings.map((DailyBuying) => DailyBuying_1.DailyBuyingEntity.toEntity(DailyBuying));
    }
    async findAllWithSchema(filter) {
        const totalCounts = await this.prisma.dailyBuying.count({
            where: {
                particular: { contains: filter.particular },
            },
        });
        const dailyBuyings = await this.prisma.dailyBuying.findMany({
            where: {
                particular: { contains: filter.particular },
            },
            take: filter.take,
            skip: filter.skip,
        });
        return {
            DailyBuyings: dailyBuyings.map((DailyBuying) => DailyBuying_1.DailyBuyingEntity.toEntity(DailyBuying)),
            totalCounts: totalCounts,
        };
    }
};
exports.PrismaDailyBuyingRepository = PrismaDailyBuyingRepository;
exports.PrismaDailyBuyingRepository = PrismaDailyBuyingRepository = __decorate([
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PrismaDailyBuyingRepository);
//# sourceMappingURL=PrismaDailyBuyingRepository.js.map