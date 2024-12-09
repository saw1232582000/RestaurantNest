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
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const product_controller_1 = require("../controller/product.controller");
const CreateProductUseCase_1 = require("../../core/domain/product/service/CreateProductUseCase");
const IProductRepository_1 = require("../../core/domain/product/port/repository-port/IProductRepository");
const PrismaProductRepository_1 = require("../../core/domain/product/repository/PrismaProductRepository");
const UpdateProductUseCase_1 = require("../../core/domain/product/service/UpdateProductUseCase");
const GetProductUseCase_1 = require("../../core/domain/product/service/GetProductUseCase");
const GetProductListUseCase_1 = require("../../core/domain/product/service/GetProductListUseCase");
const UploadS3Service_1 = require("../../core/common/file-upload/UploadS3Service");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        providers: [
            CreateProductUseCase_1.CreateProductUseCase,
            UpdateProductUseCase_1.UpdateProductUseCase,
            GetProductUseCase_1.GetProductUseCase,
            GetProductListUseCase_1.GetProductListUseCase,
            GetProductListUseCase_1.GetProductListWithFilterUseCase,
            jwt_guard_1.JwtGuard,
            UploadS3Service_1.S3Service,
            {
                provide: IProductRepository_1.IProductRepository,
                useClass: PrismaProductRepository_1.PrismaProductRepository,
            },
        ],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map