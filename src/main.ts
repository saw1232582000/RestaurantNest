import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './application/exception/global-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

// Create Express instance
const server = express();

// For local development
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  const config = new DocumentBuilder()
    .setTitle('Restaurant')
    .setDescription('This is Restaurant REST API')
    .setVersion('1.0')
    // .addTag('cats')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips properties not defined in DTO
      forbidNonWhitelisted: true, // Throws error if extra properties are sent
      transform: true, // Automatically transforms payloads to DTO instances
    }),
  );
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  app.useGlobalFilters(new GlobalExceptionFilter(logger));
  await app.listen(3000);
}

// For Vercel serverless deployment
async function createNestServer(expressInstance) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  const logger = new Logger('Main');
  const config = new DocumentBuilder()
    .setTitle('Restaurant')
    .setDescription('This is Restaurant REST API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  app.useGlobalFilters(new GlobalExceptionFilter(logger));
  return app.init();
}

// Bootstrap the app if not in production
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}

// Export the Express instance for Vercel
export default async (req, res) => {
  // Initialize the NestJS app only once
  const app = await createNestServer(server);
  return app.getHttpAdapter().getInstance()(req, res);
};
