import {
  Global,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Helper function to sleep
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
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
      } catch (error) {
        this.logger.error(
          `Failed to connect to the database (attempt ${attempt}/${retries}): ${error.message}`,
        );

        if (attempt === retries) {
          this.logger.error(
            'Max connection attempts reached. Continuing without database connection.',
          );
          return;
        }

        this.logger.log(`Retrying in ${delay}ms...`);
        await sleep(delay);
        // Exponential backoff
        delay = Math.min(delay * 1.5, 10000);
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('Successfully disconnected from the database');
  }
}
