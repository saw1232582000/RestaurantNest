import { ProductEntity } from '../entity/Product';
import { Nullable } from 'src/core/common/type/CommonTypes';
export declare class UpdateProductDto {
    id: Nullable<string>;
    userId: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    createdDate: Nullable<Date>;
    updatedDate: Nullable<Date>;
    static convertToClass(product: ProductEntity): UpdateProductDto;
}
