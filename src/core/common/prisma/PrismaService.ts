import {
  Global,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// For serverless environments, we need to ensure connections are properly managed
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['error', 'warn'],
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
  constructor() {
    super({
      log: ['error', 'warn'],
    });
  }

  async onModuleInit() {
    await this.$connect();
    //console.log('Successfully connected to the database');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
