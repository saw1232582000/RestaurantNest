import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
import { DailyBuyingFilter } from '../dto/DailyBuyingFilter';
import { IGetDailyBuyingListUseCase } from '../port/service-port/IGetDailyBuyingList';
export declare class GetDailyBuyingListUseCase implements IGetDailyBuyingListUseCase {
    private readonly DailyBuyingRepository;
    constructor(DailyBuyingRepository: IDailyBuyingRepository);
    execute(): Promise<any>;
}
export declare class GetDailyBuyingListWithFilterUseCase implements IGetDailyBuyingListUseCase {
    private readonly DailyBuyingRepository;
    constructor(DailyBuyingRepository: IDailyBuyingRepository);
    execute(filter: DailyBuyingFilter): Promise<any>;
}
