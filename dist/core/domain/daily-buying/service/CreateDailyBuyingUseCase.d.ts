import { ICreateDailyBuyingUseCase } from '../port/service-port/ICreateDailyBuyingUseCase';
import { CreateDailyBuyingDto } from '../dto/CreateDailyBuyingDto';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
export declare class CreateDailyBuyingUseCase implements ICreateDailyBuyingUseCase {
    private readonly DailyBuyingRepository;
    constructor(DailyBuyingRepository: IDailyBuyingRepository);
    execute(data?: CreateDailyBuyingDto): Promise<any>;
}
