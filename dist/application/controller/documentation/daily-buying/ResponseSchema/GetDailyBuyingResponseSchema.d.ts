import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class GetDailyBuyingResponse {
    Id: string;
    particular: string;
    unit: string;
    price: number;
    quantity: number;
    Amount: number;
    createdDate: Date;
    updatedDate: Date;
}
export declare class GetDailyBuyingResponseSchema extends BaseResponseSchema<GetDailyBuyingResponse> {
    data: GetDailyBuyingResponse;
}
export {};
