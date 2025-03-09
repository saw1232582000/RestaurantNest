import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/PrismaService';

@Injectable()
export class DatabaseConnectionMiddleware implements NestMiddleware {
  private readonly logger = new Logger(DatabaseConnectionMiddleware.name);
  private lastConnectionAttempt = 0;
  private readonly connectionRetryInterval = 30000; // 30 seconds

  constructor(private readonly prismaService: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      // Only attempt reconnection if it's been more than 30 seconds since the last attempt
      const now = Date.now();
      if (now - this.lastConnectionAttempt > this.connectionRetryInterval) {
        this.lastConnectionAttempt = now;

        // Check if we can execute a simple query
        try {
          // Try a simple query to check connection
          await this.prismaService.$queryRaw`SELECT 1`;
          this.logger.log('Database connection is active');
        } catch (error) {
          this.logger.warn(
            'Database connection lost, attempting to reconnect...',
          );

          try {
            // Disconnect first to clean up any stale connections
            await this.prismaService.$disconnect();
            // Then try to reconnect
            await this.prismaService.connectWithRetry(3, 1000);
          } catch (reconnectError) {
            this.logger.error(
              `Failed to reconnect to database: ${reconnectError.message}`,
            );
          }
        }
      }

      next();
    } catch (error) {
      this.logger.error(
        `Error in database connection middleware: ${error.message}`,
      );
      next();
    }
  }
}
