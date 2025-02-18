import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class UpdateDailyBuyingResponse {
    Id: string;
    particular: string;
    unit: string;
    price: number;
    quantity: number;
    Amount: number;
    createdDate: Date;
    updatedDate: Date;
}
export declare class UpdateDailyBuyingResponseSchema extends BaseResponseSchema<UpdateDailyBuyingResponse> {
    data: UpdateDailyBuyingResponse;
}
export {};
