import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class UpdateProductResponse {
    id: string;
    userId: string;
    name: string;
    price: number;
    description: string;
    category: string;
    createdDate: Date;
    updatedDate: Date;
}
export declare class UpdateProductResponseSchema extends BaseResponseSchema<UpdateProductResponse> {
    data: UpdateProductResponse;
}
export {};
