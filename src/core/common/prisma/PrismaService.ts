import {
  Global,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// For serverless environments, we need to ensure connections are properly managed
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['error', 'warn'],
    // Optimize connection for serverless
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
};

// Use global type for PrismaClient
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Create global variable for PrismaClient
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// Export prisma client
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Set prisma to global in non-production environments
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

@Global()
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: ['error', 'warn'],
      // Optimize connection for serverless
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('Successfully connected to the database');
    } catch (error) {
      this.logger.error('Failed to connect to the database', error);
      // Don't throw here to allow the app to start even if DB connection fails initially
      // It will retry on the first query
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('Successfully disconnected from the database');
  }
}
