import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './core/common/prisma/PrismaService';
import { Response } from 'express';

// Define the health check response type
interface HealthCheckResponse {
  status: string;
  timestamp: string;
  uptime: number;
  database: {
    status: string;
    error?: string; // Make error optional
  };
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  async healthCheck(@Res() res: Response) {
    // Initialize the health check response with proper typing
    const health: HealthCheckResponse = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: {
        status: 'unknown',
      },
    };

    try {
      // Check database connection
      await this.prismaService.$queryRaw`SELECT 1`;
      health.database.status = 'connected';
      return res.status(HttpStatus.OK).json(health);
    } catch (error) {
      health.status = 'degraded';
      health.database.status = 'disconnected';
      health.database.error = error.message;
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).json(health);
    }
  }
}
