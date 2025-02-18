import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class CreateDailyBuyingResponse {
    Id: string;
    particular: string;
    unit: string;
    price: number;
    quantity: number;
    Amount: number;
    createdDate: Date;
    updatedDate: Date;
}
export declare class CreateDailyBuyingResponseSchema extends BaseResponseSchema<CreateDailyBuyingResponse> {
    data: CreateDailyBuyingResponse;
}
export {};
