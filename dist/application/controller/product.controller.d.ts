import { CreateProductUseCase, GetProductListUseCase, GetProductListWithFilterUseCase, GetProductUseCase, UpdateProductUseCase } from '@src/core/domain/product/port/service-port/IProductUseCase';
import { S3Service } from '@src/core/common/file-upload/UploadS3Service';
import { CreateProductDto } from '@src/core/domain/product/dto/CreateProductDto';
import { ProductResponseDto } from '@src/core/domain/product/dto/ProductResponseDto';
import { CoreApiResponseSchema } from '@src/core/common/schema/ApiResponseSchema';
import { ProductListResponseDto } from '@src/core/domain/product/dto/ProductListResponseDto';
import { ProductFilterDto } from '@src/core/domain/product/dto/ProductFilter';
export declare class ProductController {
    private readonly createProductUseCase;
    private readonly updateProductUseCase;
    private readonly getProductUseCase;
    private readonly getProductListUseCase;
    private readonly getProductListWithFilterUseCase;
    private readonly s3Service;
    constructor(createProductUseCase: CreateProductUseCase, updateProductUseCase: UpdateProductUseCase, getProductUseCase: GetProductUseCase, getProductListUseCase: GetProductListUseCase, getProductListWithFilterUseCase: GetProductListWithFilterUseCase, s3Service: S3Service);
    create(dto: CreateProductDto, req: any): Promise<CoreApiResponseSchema<ProductResponseDto>>;
    update(body: CreateProductDto, id: string, req: any): Promise<CoreApiResponseSchema<ProductResponseDto>>;
    get(id: string): Promise<CoreApiResponseSchema<ProductResponseDto>>;
    getAll(): Promise<CoreApiResponseSchema<ProductListResponseDto>>;
    getAllByFilter(query: ProductFilterDto): Promise<CoreApiResponseSchema<ProductListResponseDto>>;
    upload(file: Express.Multer.File): Promise<CoreApiResponseSchema<{
        url: string;
    }>>;
}
