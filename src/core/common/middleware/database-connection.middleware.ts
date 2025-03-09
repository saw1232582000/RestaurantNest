import { Injectable, NestMiddleware, Logger, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/PrismaService';

@Injectable()
export class DatabaseConnectionMiddleware implements NestMiddleware {
  private readonly logger = new Logger(DatabaseConnectionMiddleware.name);
  private lastConnectionAttempt = 0;
  private readonly connectionRetryInterval = 30000; // 30 seconds
  private isDbConnected = false;

  constructor(private readonly prismaService: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // Skip connection check for preflight requests
    if (req.method === 'OPTIONS') {
      return next();
    }

    try {
      // Only attempt reconnection if it's been more than 30 seconds since the last attempt
      const now = Date.now();
      if (
        !this.isDbConnected ||
        now - this.lastConnectionAttempt > this.connectionRetryInterval
      ) {
        this.lastConnectionAttempt = now;

        // Check if we can execute a simple query
        try {
          // Try a simple query to check connection
          await this.prismaService.$queryRaw`SELECT 1`;
          this.isDbConnected = true;
          this.logger.log('Database connection is active');
        } catch (error) {
          this.isDbConnected = false;
          this.logger.warn(
            'Database connection lost, attempting to reconnect...',
          );

          try {
            // Disconnect first to clean up any stale connections
            await this.prismaService.$disconnect();
            // Then try to reconnect
            await this.prismaService.connectWithRetry(3, 1000);

            // Check if reconnection was successful
            try {
              await this.prismaService.$queryRaw`SELECT 1`;
              this.isDbConnected = true;
              this.logger.log('Successfully reconnected to the database');
            } catch (testError) {
              this.isDbConnected = false;
              this.logger.error('Reconnection test failed');
            }
          } catch (reconnectError) {
            this.isDbConnected = false;
            this.logger.error(
              `Failed to reconnect to database: ${reconnectError.message}`,
            );
          }
        }
      }

      // If database is not connected, return a service unavailable response
      // except for health check endpoints
      if (!this.isDbConnected && !req.path.includes('/health')) {
        this.logger.warn(
          `Database unavailable, returning 503 for request to ${req.path}`,
        );
        return res.status(HttpStatus.SERVICE_UNAVAILABLE).json({
          statusCode: HttpStatus.SERVICE_UNAVAILABLE,
          message:
            'Database service temporarily unavailable. Please try again later.',
          timestamp: new Date().toISOString(),
          path: req.url,
        });
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
