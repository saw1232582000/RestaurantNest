import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './application/exception/global-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VercelRequest, VercelResponse } from '@vercel/node';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const logger = new Logger('Main');
//   const config = new DocumentBuilder()
//     .setTitle('Restaurant')
//     .setDescription('This is Restaurant REST API')
//     .setVersion('1.0')
//     // .addTag('cats')
//     .addBearerAuth()
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);
//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true, // Strips properties not defined in DTO
//       forbidNonWhitelisted: true, // Throws error if extra properties are sent
//       transform: true, // Automatically transforms payloads to DTO instances
//     }),
//   );
//   app.enableCors({
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   });
//   app.useGlobalFilters(new GlobalExceptionFilter(logger));
//   await app.listen(3000);
// }
// bootstrap();

// Bootstrap function to initialize the NestJS app
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('Main');

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Restaurant')
    .setDescription('This is Restaurant REST API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips properties not defined in DTO
      forbidNonWhitelisted: true, // Throws error if extra properties are sent
      transform: true, // Automatically transforms payloads to DTO instances
    }),
  );

  // CORS configuration
  const allowedOrigins = [
    process.env.FRONTEND_URL || 'https://your-frontend.com',
    process.env.LOCAL_FRONTEND_URL || 'http://localhost:3000',
  ];
  app.enableCors({
    origin: (requestOrigin, callback) => {
      if (!requestOrigin || allowedOrigins.includes(requestOrigin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Global exception filter
  app.useGlobalFilters(new GlobalExceptionFilter(logger));

  // Initialize the app (important for Vercel)
  await app.init();

  return app;
}

// Export the Serverless Function for Vercel
export default async (req: VercelRequest, res: VercelResponse) => {
  const app = await bootstrap();
  const server = app.getHttpAdapter().getInstance();
  return server(req, res);
};
