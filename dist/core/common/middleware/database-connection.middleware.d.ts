import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/PrismaService';
export declare class DatabaseConnectionMiddleware implements NestMiddleware {
    private readonly prismaService;
    private readonly logger;
    private lastConnectionAttempt;
    private readonly connectionRetryInterval;
    private isDbConnected;
    constructor(prismaService: PrismaService);
    use(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
