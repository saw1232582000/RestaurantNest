import { ProductEntity } from '../entity/Product';
import { Nullable } from 'src/core/common/type/CommonTypes';
export declare class CreateProductDto {
    id: Nullable<string>;
    userId: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
    createdDate: Nullable<Date>;
    updatedDate: Nullable<Date>;
    static convertToClass(product: ProductEntity): CreateProductDto;
}
