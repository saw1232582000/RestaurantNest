import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class GetProductResponse {
    id: string;
    userId: string;
    name: string;
    price: number;
    description: string;
    category: string;
    createdDate: Date;
    updateddDate: Date;
}
export declare class GetProductResponseSchema extends BaseResponseSchema<GetProductResponse> {
    data: GetProductResponse;
}
export {};
