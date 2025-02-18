import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class DailyBuying {
    Id: string;
    particular: string;
    unit: string;
    price: number;
    quantity: number;
    Amount: number;
    createdDate: Date;
    updatedDate: Date;
}
declare class GetDailyBuyingList {
    DailyBuyings: DailyBuying[];
    totalCount: number;
}
export declare class GetDailyBuyingListResponseSchema extends BaseResponseSchema<GetDailyBuyingList> {
    data: GetDailyBuyingList;
}
export {};
