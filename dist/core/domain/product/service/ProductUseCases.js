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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductListWithFilterUseCaseImpl = exports.GetProductListUseCaseImpl = exports.GetProductUseCaseImpl = exports.UpdateProductUseCaseImpl = exports.CreateProductUseCaseImpl = void 0;
const common_1 = require("@nestjs/common");
const IProductRepository_1 = require("../port/repository-port/IProductRepository");
const ProductResponseDto_1 = require("../dto/ProductResponseDto");
const Product_1 = require("../entity/Product");
const ProductListResponseDto_1 = require("../dto/ProductListResponseDto");
let CreateProductUseCaseImpl = class CreateProductUseCaseImpl {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(dto) {
        const entity = new Product_1.ProductEntity({ ...dto });
        const created = await this.productRepository.create(entity);
        return ProductResponseDto_1.ProductResponseDto.fromEntity(created);
    }
};
exports.CreateProductUseCaseImpl = CreateProductUseCaseImpl;
exports.CreateProductUseCaseImpl = CreateProductUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IProductRepository_1.ProductRepository])
], CreateProductUseCaseImpl);
let UpdateProductUseCaseImpl = class UpdateProductUseCaseImpl {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(dto) {
        const entity = new Product_1.ProductEntity({ ...dto });
        const updated = await this.productRepository.update(entity);
        return ProductResponseDto_1.ProductResponseDto.fromEntity(updated);
    }
};
exports.UpdateProductUseCaseImpl = UpdateProductUseCaseImpl;
exports.UpdateProductUseCaseImpl = UpdateProductUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IProductRepository_1.ProductRepository])
], UpdateProductUseCaseImpl);
let GetProductUseCaseImpl = class GetProductUseCaseImpl {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(id) {
        const product = await this.productRepository.find({ id });
        if (!product)
            throw new common_1.BadRequestException('Product not found');
        return ProductResponseDto_1.ProductResponseDto.fromEntity(product);
    }
};
exports.GetProductUseCaseImpl = GetProductUseCaseImpl;
exports.GetProductUseCaseImpl = GetProductUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IProductRepository_1.ProductRepository])
], GetProductUseCaseImpl);
let GetProductListUseCaseImpl = class GetProductListUseCaseImpl {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute() {
        const products = await this.productRepository.findAll();
        return ProductListResponseDto_1.ProductListResponseDto.fromEntities(products, products.length);
    }
};
exports.GetProductListUseCaseImpl = GetProductListUseCaseImpl;
exports.GetProductListUseCaseImpl = GetProductListUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IProductRepository_1.ProductRepository])
], GetProductListUseCaseImpl);
let GetProductListWithFilterUseCaseImpl = class GetProductListWithFilterUseCaseImpl {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(filter) {
        const { products, totalCounts } = await this.productRepository.findAllWithFilter(filter);
        return ProductListResponseDto_1.ProductListResponseDto.fromEntities(products, totalCounts);
    }
};
exports.GetProductListWithFilterUseCaseImpl = GetProductListWithFilterUseCaseImpl;
exports.GetProductListWithFilterUseCaseImpl = GetProductListWithFilterUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IProductRepository_1.ProductRepository])
], GetProductListWithFilterUseCaseImpl);
//# sourceMappingURL=ProductUseCases.js.map