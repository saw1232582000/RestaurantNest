import { AppService } from './app.service';
import { PrismaService } from './core/common/prisma/PrismaService';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    private readonly prismaService;
    constructor(appService: AppService, prismaService: PrismaService);
    getHello(): string;
    healthCheck(res: Response): Promise<Response<any, Record<string, any>>>;
}
