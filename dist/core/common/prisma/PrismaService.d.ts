import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare const prisma: PrismaClient<{
    log: ("warn" | "error")[];
    datasources: {
        db: {
            url: string;
        };
    };
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
