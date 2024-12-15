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
const CreateProductDto_1 = require("../../core/domain/product/dto/CreateProductDto");
const CreateProductUseCase_1 = require("../../core/domain/product/service/CreateProductUseCase");
const CreateProductRequestSchema_1 = require("./documentation/product/RequestSchema/CreateProductRequestSchema");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const ApiResponseSchema_1 = require("../../core/common/schema/ApiResponseSchema");
const UpdateProductDto_1 = require("../../core/domain/product/dto/UpdateProductDto");
const BaseRequestQuerySchema_1 = require("./documentation/common/BaseRequestQuerySchema");
const UpdateProductUseCase_1 = require("../../core/domain/product/service/UpdateProductUseCase");
const GetProductUseCase_1 = require("../../core/domain/product/service/GetProductUseCase");
const GetProductListUseCase_1 = require("../../core/domain/product/service/GetProductListUseCase");
const CreateProductResponseSchema_1 = require("./documentation/product/ResponseSchema/CreateProductResponseSchema");
const UpdateProductResponseSchema_1 = require("./documentation/product/ResponseSchema/UpdateProductResponseSchema");
const GetProductResponseSchema_1 = require("./documentation/product/ResponseSchema/GetProductResponseSchema");
const GetProductListResponseSchema_1 = require("./documentation/product/ResponseSchema/GetProductListResponseSchema");
const ProductFilterSchema_1 = require("./documentation/product/RequestSchema/ProductFilterSchema");
const ProductFilter_1 = require("../../core/domain/product/dto/ProductFilter");
const platform_express_1 = require("@nestjs/platform-express");
const UploadS3Service_1 = require("../../core/common/file-upload/UploadS3Service");
const UploadProductResponseSchema_1 = require("./documentation/product/ResponseSchema/UploadProductResponseSchema");
let ProductController = class ProductController {
    constructor(createProductUseCase, updateProductUsecase, getProductUsecase, getProductListUsecase, getProductListWithFilter, s3Service) {
        this.createProductUseCase = createProductUseCase;
        this.updateProductUsecase = updateProductUsecase;
        this.getProductUsecase = getProductUsecase;
        this.getProductListUsecase = getProductListUsecase;
        this.getProductListWithFilter = getProductListWithFilter;
        this.s3Service = s3Service;
    }
    async create(product, req) {
        const createProductDto = new CreateProductDto_1.CreateProductDto();
        createProductDto.userId = req.user?.user?.id;
        createProductDto.name = product.name;
        createProductDto.image = product.image;
        createProductDto.description = product.description;
        createProductDto.category = product.category;
        createProductDto.price = product.price;
        return ApiResponseSchema_1.CoreApiResonseSchema.success(await this.createProductUseCase.execute(createProductDto));
    }
    async update(product, req, params) {
        const updateProductDto = new UpdateProductDto_1.UpdateProductDto();
        updateProductDto.id = params.id;
        updateProductDto.userId = req.user?.user?.id;
        updateProductDto.name = product.name;
        updateProductDto.description = product.description;
        updateProductDto.category = product.category;
        updateProductDto.price = product.price;
        return ApiResponseSchema_1.CoreApiResonseSchema.success(await this.updateProductUsecase.execute(updateProductDto));
    }
    async get(req, params) {
        return ApiResponseSchema_1.CoreApiResonseSchema.success(await this.getProductUsecase.execute(params.id));
    }
    async getAll() {
        return ApiResponseSchema_1.CoreApiResonseSchema.success(await this.getProductListUsecase.execute());
    }
    async getAllByFilter(params) {
        const filter = new ProductFilter_1.ProductFilter(params.name, parseInt(params?.take.toString()), parseInt(params?.skip.toString()));
        return ApiResponseSchema_1.CoreApiResonseSchema.success(await this.getProductListWithFilter.execute(filter));
    }
    async Upload(file) {
        return ApiResponseSchema_1.CoreApiResonseSchema.success({
            url: await this.s3Service.uploadFile(file, 'restaurant/menus'),
        });
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: CreateProductRequestSchema_1.CreateProductSchema }),
    (0, swagger_1.ApiResponse)({ type: CreateProductResponseSchema_1.CreateProductResponseSchema }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProductRequestSchema_1.CreateProductSchema, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiBody)({ type: CreateProductRequestSchema_1.CreateProductSchema }),
    (0, swagger_1.ApiQuery)({ type: BaseRequestQuerySchema_1.BaseRequestQuerySchema }),
    (0, swagger_1.ApiResponse)({ type: UpdateProductResponseSchema_1.UpdateProductResponseSchema }),
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProductRequestSchema_1.CreateProductSchema, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiQuery)({ type: BaseRequestQuerySchema_1.BaseRequestQuerySchema }),
    (0, swagger_1.ApiResponse)({ type: GetProductResponseSchema_1.GetProductResponseSchema }),
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: GetProductListResponseSchema_1.GetProductListResponseSchema }),
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiResponse)({ type: GetProductListResponseSchema_1.GetProductListResponseSchema }),
    (0, common_1.Get)('/getProductListByName'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductFilterSchema_1.ProdcutFilterSchama]),
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
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ type: UploadProductResponseSchema_1.UploadProductImageResponseSchema }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
            new common_1.FileTypeValidator({ fileType: /\/(jpg|jpeg|png|gif|bmp|webp)$/ }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "Upload", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('Product'),
    (0, swagger_1.ApiTags)('product'),
    __metadata("design:paramtypes", [CreateProductUseCase_1.CreateProductUseCase,
        UpdateProductUseCase_1.UpdateProductUseCase,
        GetProductUseCase_1.GetProductUseCase,
        GetProductListUseCase_1.GetProductListUseCase,
        GetProductListUseCase_1.GetProductListWithFilterUseCase,
        UploadS3Service_1.S3Service])
], ProductController);
//# sourceMappingURL=product.controller.js.map