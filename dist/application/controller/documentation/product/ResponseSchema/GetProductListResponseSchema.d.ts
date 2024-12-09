import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class Product {
    id: string;
    userId: string;
    name: string;
    price: number;
    description: string;
    category: string;
    createdDate: Date;
    updateddDate: Date;
}
declare class GetProductList {
    products: Product[];
    totalCount: number;
}
export declare class GetProductListResponseSchema extends BaseResponseSchema<GetProductList> {
    data: GetProductList;
}
export {};
