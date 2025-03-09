"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const global_exception_filter_1 = require("./application/exception/global-exception.filter");
const common_1 = require("@nestjs/common");
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
    const allowedOrigins = [
        process.env.FRONTEND_URL || 'https://your-frontend.com',
        process.env.LOCAL_FRONTEND_URL || 'http://localhost:3000',
    ];
    app.enableCors({
        origin: (requestOrigin, callback) => {
            if (!requestOrigin || allowedOrigins.includes(requestOrigin)) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.useGlobalFilters(new global_exception_filter_1.GlobalExceptionFilter(logger));
    await app.init();
    return app;
}
exports.default = async (req, res) => {
    const app = await bootstrap();
    const server = app.getHttpAdapter().getInstance();
    return server(req, res);
};
//# sourceMappingURL=main.js.map