import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class CreateProductResponse {
    id: string;
    userId: string;
    name: string;
    price: number;
    description: string;
    category: string;
    createdDate: Date;
    updatedDate: Date;
}
export declare class CreateProductResponseSchema extends BaseResponseSchema<CreateProductResponse> {
    data: CreateProductResponse;
}
export {};
