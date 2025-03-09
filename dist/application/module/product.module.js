"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("../controller/product.controller");
const ProductUseCases_1 = require("../../core/domain/product/service/ProductUseCases");
const PrismaProductRepository_1 = require("../../core/domain/product/repository/PrismaProductRepository");
const PrismaService_1 = require("../../core/common/prisma/PrismaService");
const UploadS3Service_1 = require("../../core/common/file-upload/UploadS3Service");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const IProductRepository_1 = require("../../core/domain/product/port/repository-port/IProductRepository");
const IProductUseCase_1 = require("../../core/domain/product/port/service-port/IProductUseCase");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        providers: [
            { provide: IProductUseCase_1.CreateProductUseCase, useClass: ProductUseCases_1.CreateProductUseCaseImpl },
            { provide: IProductUseCase_1.UpdateProductUseCase, useClass: ProductUseCases_1.UpdateProductUseCaseImpl },
            { provide: IProductUseCase_1.GetProductUseCase, useClass: ProductUseCases_1.GetProductUseCaseImpl },
            { provide: IProductUseCase_1.GetProductListUseCase, useClass: ProductUseCases_1.GetProductListUseCaseImpl },
            {
                provide: IProductUseCase_1.GetProductListWithFilterUseCase,
                useClass: ProductUseCases_1.GetProductListWithFilterUseCaseImpl,
            },
            { provide: IProductRepository_1.ProductRepository, useClass: PrismaProductRepository_1.PrismaProductRepository },
            PrismaService_1.PrismaService,
            UploadS3Service_1.S3Service,
            jwt_guard_1.JwtGuard,
        ],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map