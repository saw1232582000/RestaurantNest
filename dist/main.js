"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const global_exception_filter_1 = require("./application/exception/global-exception.filter");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
let cachedApp = null;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('Main');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Restaurant')
        .setDescription('This is Restaurant REST API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.useGlobalFilters(new global_exception_filter_1.GlobalExceptionFilter(logger));
    await app.listen(3000);
}
async function createNestServer(expressInstance) {
    if (cachedApp) {
        return cachedApp;
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance), {
        logger: ['error', 'warn', 'log'],
        bodyParser: true,
    });
    const logger = new common_1.Logger('Main');
    if (process.env.NODE_ENV !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Restaurant')
            .setDescription('This is Restaurant REST API')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors({
        origin: [
            'https://restaurant-pos-virid.vercel.app',
            'http://localhost:3000',
            '*',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    app.useGlobalFilters(new global_exception_filter_1.GlobalExceptionFilter(logger));
    await app.init();
    cachedApp = app;
    return app;
}
if (process.env.NODE_ENV !== 'production') {
    bootstrap();
}
exports.default = async (req, res) => {
    try {
        const app = await createNestServer(server);
        return app.getHttpAdapter().getInstance()(req, res);
    }
    catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
            error: process.env.NODE_ENV === 'production' ? undefined : error.message,
        });
    }
};
//# sourceMappingURL=main.js.map