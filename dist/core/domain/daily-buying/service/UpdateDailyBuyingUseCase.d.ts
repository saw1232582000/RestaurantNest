import { IUpdateDailyBuyingUseCase } from '../port/service-port/IUpdateDailyBuyingUseCase';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
import { UpdateDailyBuyingDto } from '../dto/UpdateDailyBuyingDto';
export declare class UpdateDailyBuyingUseCase implements IUpdateDailyBuyingUseCase {
    private readonly DailyBuyingRepository;
    constructor(DailyBuyingRepository: IDailyBuyingRepository);
    execute(data?: UpdateDailyBuyingDto): Promise<any>;
}
