import { DailyBuyingEntity } from '../entity/DailyBuying';
import { Nullable } from 'src/core/common/type/CommonTypes';
export declare class UpdateDailyBuyingDto {
    Id: Nullable<string>;
    particular: string;
    unit: string;
    price: number;
    quantity: number;
    Amount: number;
    category: string;
    createdDate: Nullable<Date>;
    updatedDate: Nullable<Date>;
    static convertToClass(DailyBuying: DailyBuyingEntity): UpdateDailyBuyingDto;
}
