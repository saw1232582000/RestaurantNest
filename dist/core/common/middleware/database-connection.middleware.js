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
        this.isDbConnected = false;
    }
    async use(req, res, next) {
        if (req.method === 'OPTIONS') {
            return next();
        }
        try {
            const now = Date.now();
            if (!this.isDbConnected ||
                now - this.lastConnectionAttempt > this.connectionRetryInterval) {
                this.lastConnectionAttempt = now;
                try {
                    await this.prismaService.$queryRaw `SELECT 1`;
                    this.isDbConnected = true;
                    this.logger.log('Database connection is active');
                }
                catch (error) {
                    this.isDbConnected = false;
                    this.logger.warn('Database connection lost, attempting to reconnect...');
                    try {
                        await this.prismaService.$disconnect();
                        await this.prismaService.connectWithRetry(3, 1000);
                        try {
                            await this.prismaService.$queryRaw `SELECT 1`;
                            this.isDbConnected = true;
                            this.logger.log('Successfully reconnected to the database');
                        }
                        catch (testError) {
                            this.isDbConnected = false;
                            this.logger.error('Reconnection test failed');
                        }
                    }
                    catch (reconnectError) {
                        this.isDbConnected = false;
                        this.logger.error(`Failed to reconnect to database: ${reconnectError.message}`);
                    }
                }
            }
            if (!this.isDbConnected && !req.path.includes('/health')) {
                this.logger.warn(`Database unavailable, returning 503 for request to ${req.path}`);
                return res.status(common_1.HttpStatus.SERVICE_UNAVAILABLE).json({
                    statusCode: common_1.HttpStatus.SERVICE_UNAVAILABLE,
                    message: 'Database service temporarily unavailable. Please try again later.',
                    timestamp: new Date().toISOString(),
                    path: req.url,
                });
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