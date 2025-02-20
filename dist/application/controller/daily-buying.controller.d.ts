import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';
import { CreateDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/CreateDailyBuyingUseCase';
import { UpdateDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/UpdateDailyBuyingUseCase';
import { GetDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/GetDailyBuyingUseCase';
import { GetDailyBuyingListUseCase, GetDailyBuyingListWithFilterUseCase } from '@src/core/domain/daily-buying/service/GetDailyBuyingListUseCase';
import { CreateDailyBuyingSchema } from './documentation/daily-buying/RequestSchema/CreateDailyBuyingRequestSchema';
import { DailyBuyingFilterSchama } from './documentation/daily-buying/RequestSchema/DailyBuyingFilterSchema';
import { CreateManyDailyBuyingSchema } from './documentation/daily-buying/RequestSchema/CreateManyDailyBuyingReqeustSchema';
import { ICreateManyDailyBuyingUseCase } from '@src/core/domain/daily-buying/port/service-port/ICreateManyDailyBuyingUseCase';
export declare class DailyBuyingController {
    private createDailyBuyingUseCase;
    private updateDailyBuyingUsecase;
    private getDailyBuyingUsecase;
    private getDailyBuyingListUsecase;
    private getDailyBuyingListWithFilter;
    private createManyDailyBuyingUseCase;
    constructor(createDailyBuyingUseCase: CreateDailyBuyingUseCase, updateDailyBuyingUsecase: UpdateDailyBuyingUseCase, getDailyBuyingUsecase: GetDailyBuyingUseCase, getDailyBuyingListUsecase: GetDailyBuyingListUseCase, getDailyBuyingListWithFilter: GetDailyBuyingListWithFilterUseCase, createManyDailyBuyingUseCase: ICreateManyDailyBuyingUseCase);
    create(dailyBuying: CreateDailyBuyingSchema, req: any): Promise<CoreApiResonseSchema<any>>;
    createMany(dailyBuyings: CreateManyDailyBuyingSchema, req: any): Promise<CoreApiResonseSchema<any>>;
    update(dailyBuying: CreateDailyBuyingSchema, req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<any>>;
    get(req: any, params: {
        id: string;
    }): Promise<CoreApiResonseSchema<any>>;
    getAll(): Promise<CoreApiResonseSchema<any>>;
    getAllByFilter(params: DailyBuyingFilterSchama): Promise<CoreApiResonseSchema<any>>;
}
