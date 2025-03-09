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
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    constructor() {
        super({
            log: ['error', 'warn'],
            datasources: {
                db: {
                    url: process.env.DATABASE_URL,
                },
            },
        });
        this.logger = new common_1.Logger(PrismaService_1.name);
    }
    async onModuleInit() {
        await this.connectWithRetry();
    }
    async connectWithRetry(retries = 5, delay = 2000) {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                await this.$connect();
                this.logger.log('Successfully connected to the database');
                return;
            }
            catch (error) {
                this.logger.error(`Failed to connect to the database (attempt ${attempt}/${retries}): ${error.message}`);
                if (attempt === retries) {
                    this.logger.error('Max connection attempts reached. Continuing without database connection.');
                    return;
                }
                this.logger.log(`Retrying in ${delay}ms...`);
                await sleep(delay);
                delay = Math.min(delay * 1.5, 10000);
            }
        }
    }
    async onModuleDestroy() {
        await this.$disconnect();
        this.logger.log('Successfully disconnected from the database');
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=PrismaService.js.map