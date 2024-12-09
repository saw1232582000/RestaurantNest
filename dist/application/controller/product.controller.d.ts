import { CreateProductUseCase } from 'src/core/domain/product/service/CreateProductUseCase';
import { CreateProductSchema } from './documentation/product/RequestSchema/CreateProductRequestSchema';
import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';
import { UpdateProductUseCase } from 'src/core/domain/product/service/UpdateProductUseCase';
import { GetProductUseCase } from 'src/core/domain/product/service/GetProductUseCase';
import { GetProductListUseCase, GetProductListWithFilterUseCase } from 'src/core/domain/product/service/GetProductListUseCase';
import { ProdcutFilterSchama } from './documentation/product/RequestSchema/ProductFilterSchema';
import { S3Service } from 'src/core/common/file-upload/UploadS3Service';
export declare class ProductController {
    private createProductUseCase;
    private updateProductUsecase;
    private getProductUsecase;
    private getProductListUsecase;
    private getProductListWithFilter;
    private s3Service;
    constructor(createProductUseCase: CreateProductUseCase, updateProductUsecase: UpdateProductUseCase, getProductUsecase: GetProductUseCase, getProductListUsecase: GetProductListUseCase, getProductListWithFilter: GetProductListWithFilterUseCase, s3Service: S3Service);
    create(product: CreateProductSchema, req: any): Promise<CoreApiResonseSchema<any>>;
    update(product: CreateProductSchema, req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<any>>;
    get(req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<any>>;
    getAll(): Promise<CoreApiResonseSchema<any>>;
    getAllByFilter(params: ProdcutFilterSchama): Promise<CoreApiResonseSchema<any>>;
    Upload(file: Express.Multer.File): Promise<CoreApiResonseSchema<{
        url: string;
    }>>;
}
