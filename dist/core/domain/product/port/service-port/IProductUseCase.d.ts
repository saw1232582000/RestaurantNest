import { CreateProductDto } from '../../dto/CreateProductDto';
import { ProductFilterDto } from '../../dto/ProductFilter';
import { ProductListResponseDto } from '../../dto/ProductListResponseDto';
import { ProductResponseDto } from '../../dto/ProductResponseDto';
import { UpdateProductDto } from '../../dto/UpdateProductDto';
export declare abstract class CreateProductUseCase {
    abstract execute(dto: CreateProductDto): Promise<ProductResponseDto>;
}
export declare abstract class UpdateProductUseCase {
    abstract execute(dto: UpdateProductDto): Promise<ProductResponseDto>;
}
export declare abstract class GetProductUseCase {
    abstract execute(id: string): Promise<ProductResponseDto>;
}
export declare abstract class GetProductListUseCase {
    abstract execute(): Promise<ProductListResponseDto>;
}
export declare abstract class GetProductListWithFilterUseCase {
    abstract execute(filter: ProductFilterDto): Promise<ProductListResponseDto>;
}
