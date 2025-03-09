"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const pipes_1 = require("@nestjs/common/pipes");
const IProductUseCase_1 = require("../../core/domain/product/port/service-port/IProductUseCase");
const UploadS3Service_1 = require("../../core/common/file-upload/UploadS3Service");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const CreateProductDto_1 = require("../../core/domain/product/dto/CreateProductDto");
const ProductResponseDto_1 = require("../../core/domain/product/dto/ProductResponseDto");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const UpdateProductDto_1 = require("../../core/domain/product/dto/UpdateProductDto");
const ProductListResponseDto_1 = require("../../core/domain/product/dto/ProductListResponseDto");
const ProductFilter_1 = require("../../core/domain/product/dto/ProductFilter");
class ProductResponseSchema extends ApiResponseSchema_1.CoreApiResponseSchema {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: ProductResponseDto_1.ProductResponseDto }),
    __metadata("design:type", ProductResponseDto_1.ProductResponseDto)
], ProductResponseSchema.prototype, "data", void 0);
class ProductListResponseSchema extends ApiResponseSchema_1.CoreApiResponseSchema {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: ProductListResponseDto_1.ProductListResponseDto }),
    __metadata("design:type", ProductListResponseDto_1.ProductListResponseDto)
], ProductListResponseSchema.prototype, "data", void 0);
class UploadResponseSchema extends ApiResponseSchema_1.CoreApiResponseSchema {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object, properties: { url: { type: 'string' } } }),
    __metadata("design:type", Object)
], UploadResponseSchema.prototype, "data", void 0);
let ProductController = class ProductController {
    constructor(createProductUseCase, updateProductUseCase, getProductUseCase, getProductListUseCase, getProductListWithFilterUseCase, s3Service) {
        this.createProductUseCase = createProductUseCase;
        this.updateProductUseCase = updateProductUseCase;
        this.getProductUseCase = getProductUseCase;
        this.getProductListUseCase = getProductListUseCase;
        this.getProductListWithFilterUseCase = getProductListWithFilterUseCase;
        this.s3Service = s3Service;
    }
    async create(dto, req) {
        dto.userId = req.user?.user?.id || '';
        if (!dto.userId)
            throw new common_1.BadRequestException('User ID missing from token');
        const result = await this.createProductUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async update(body, id, req) {
        const userId = req.user?.user?.id || '';
        if (!userId)
            throw new common_1.BadRequestException('User ID missing from token');
        const dto = new UpdateProductDto_1.UpdateProductDto({ ...body, id, userId });
        const result = await this.updateProductUseCase.execute(dto);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async get(id) {
        const result = await this.getProductUseCase.execute(id);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async getAll() {
        const result = await this.getProductListUseCase.execute();
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async getAllByFilter(query) {
        const result = await this.getProductListWithFilterUseCase.execute(query);
        return ApiResponseSchema_1.CoreApiResponseSchema.success(result);
    }
    async upload(file) {
        const url = await this.s3Service.uploadFile(file, 'restaurant/menus');
        return ApiResponseSchema_1.CoreApiResponseSchema.success({ url });
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiBody)({ type: CreateProductDto_1.CreateProductDto }),
    (0, swagger_1.ApiResponse)({ status: 201, type: ProductResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProductDto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiBody)({ type: CreateProductDto_1.CreateProductDto }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, type: ProductResponseSchema }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('id')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProductDto_1.CreateProductDto, String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiQuery)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, type: ProductResponseSchema }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)('/getAll'),
    (0, swagger_1.ApiResponse)({ status: 200, type: ProductListResponseSchema }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)('/getProductListByName'),
    (0, swagger_1.ApiResponse)({ status: 200, type: ProductListResponseSchema }),
    __param(0, (0, common_1.Query)(new pipes_1.ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductFilter_1.ProductFilterDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllByFilter", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/upload'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: { file: { type: 'string', format: 'binary' } },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, type: UploadResponseSchema }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)(new pipes_1.ParseFilePipe({
        validators: [
            new pipes_1.MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
            new pipes_1.FileTypeValidator({ fileType: /\/(jpg|jpeg|png|gif|bmp|webp)$/ }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "upload", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('product'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [IProductUseCase_1.CreateProductUseCase,
        IProductUseCase_1.UpdateProductUseCase,
        IProductUseCase_1.GetProductUseCase,
        IProductUseCase_1.GetProductListUseCase,
        IProductUseCase_1.GetProductListWithFilterUseCase,
        UploadS3Service_1.S3Service])
], ProductController);
//# sourceMappingURL=product.controller.js.map