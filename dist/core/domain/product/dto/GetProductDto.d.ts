import { ProductEntity } from '../entity/Product';
import { Nullable } from 'src/core/common/type/CommonTypes';
export declare class GetProductDto {
    id: Nullable<string>;
    name: string;
    price: number;
    description: string;
    category: string;
    createdDate: Nullable<Date>;
    updatedDate: Nullable<Date>;
    static convertToClass(product: ProductEntity): GetProductDto;
}
