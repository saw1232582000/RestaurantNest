import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
import { IGetDailyBuyingUseCase } from '../port/service-port/IGetDailyBuyingUseCase';
export declare class GetDailyBuyingUseCase implements IGetDailyBuyingUseCase {
    private readonly DailyBuyingRepository;
    constructor(DailyBuyingRepository: IDailyBuyingRepository);
    execute(id: string): Promise<any>;
}
