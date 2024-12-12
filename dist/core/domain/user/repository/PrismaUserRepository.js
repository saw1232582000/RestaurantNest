"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const User_1 = require("../entity/User");
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const ApiResponseSchema_1 = require("../../../common/schema/ApiResponseSchema");
class PrismaUserRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(user) {
        try {
            const result = await this.prisma.user.create({
                data: {
                    phone: user.phone,
                    email: user.email,
                    name: user.name,
                    password: user.password,
                    role: user.role,
                },
            });
            return User_1.UserEntity.toEntity(result);
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                if (e.code == 'P2002') {
                    throw new common_1.BadRequestException(ApiResponseSchema_1.CoreApiResonseSchema.error(common_1.HttpStatus.BAD_REQUEST, 'Bad Request', e?.meta?.target[0] == 'email'
                        ? 'Email already used'
                        : 'Phone already used'));
                }
                else {
                    throw new common_1.BadRequestException('Bad Request', {
                        cause: new Error(),
                        description: 'Cannot create user',
                    });
                }
            }
            else if (e instanceof library_1.PrismaClientValidationError) {
                throw new common_1.InternalServerErrorException('Something bad happened', {
                    cause: new Error(),
                    description: e.message,
                });
            }
            else {
                throw new common_1.BadRequestException('Internal server error', {
                    cause: new Error(),
                    description: 'Cannot create user',
                });
            }
        }
    }
    async update(user) {
        try {
            const result = await this.prisma.user.update({
                where: { id: user.id },
                data: {
                    email: user?.email,
                    name: user?.name,
                    password: user?.password,
                    role: user?.role,
                    updatedDate: new Date(),
                },
            });
            return User_1.UserEntity.toEntity(result);
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
            await this.prisma.user.delete({
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
            const user = await this.prisma.user.findFirst({
                where: {
                    ...by,
                },
            });
            if (user)
                return User_1.UserEntity.toEntity(user);
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
        const users = await this.prisma.user.findMany({});
        return users.map((user) => User_1.UserEntity.toEntity(user));
    }
    async findAllWithSchema(filter) {
        try {
            const totalCounts = await this.prisma.user.count({
                where: {
                    name: { contains: filter.name },
                    role: { contains: filter.role },
                },
            });
            const users = await this.prisma.user.findMany({
                where: {
                    name: { contains: filter.name },
                    role: { contains: filter.role },
                },
                take: filter.take,
                skip: filter.skip,
            });
            return {
                users: users.map((product) => User_1.UserEntity.toEntity(product)),
                totalCounts: totalCounts,
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException('Something bad happened', {
                cause: new Error(),
                description: 'Unable to get user list',
            });
        }
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
//# sourceMappingURL=PrismaUserRepository.js.map