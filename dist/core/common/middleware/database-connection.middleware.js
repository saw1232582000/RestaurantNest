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
var DatabaseConnectionMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionMiddleware = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../prisma/PrismaService");
let DatabaseConnectionMiddleware = DatabaseConnectionMiddleware_1 = class DatabaseConnectionMiddleware {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(DatabaseConnectionMiddleware_1.name);
        this.lastConnectionAttempt = 0;
        this.connectionRetryInterval = 30000;
    }
    async use(req, res, next) {
        try {
            const now = Date.now();
            if (now - this.lastConnectionAttempt > this.connectionRetryInterval) {
                this.lastConnectionAttempt = now;
                try {
                    await this.prismaService.$queryRaw `SELECT 1`;
                    this.logger.log('Database connection is active');
                }
                catch (error) {
                    this.logger.warn('Database connection lost, attempting to reconnect...');
                    try {
                        await this.prismaService.$disconnect();
                        await this.prismaService.connectWithRetry(3, 1000);
                    }
                    catch (reconnectError) {
                        this.logger.error(`Failed to reconnect to database: ${reconnectError.message}`);
                    }
                }
            }
            next();
        }
        catch (error) {
            this.logger.error(`Error in database connection middleware: ${error.message}`);
            next();
        }
    }
};
exports.DatabaseConnectionMiddleware = DatabaseConnectionMiddleware;
exports.DatabaseConnectionMiddleware = DatabaseConnectionMiddleware = DatabaseConnectionMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], DatabaseConnectionMiddleware);
//# sourceMappingURL=database-connection.middleware.js.map