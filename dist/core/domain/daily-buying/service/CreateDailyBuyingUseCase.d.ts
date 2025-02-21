import { ICreateDailyBuyingUseCase } from '../port/service-port/ICreateDailyBuyingUseCase';
import { CreateDailyBuyingDto } from '../dto/CreateDailyBuyingDto';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
import { ICreateManyDailyBuyingUseCase } from '../port/service-port/ICreateManyDailyBuyingUseCase';
import { CreateManyDailyBuyingDto } from '../dto/CreateManyDailyBuyingDto';
export declare class CreateDailyBuyingUseCase implements ICreateDailyBuyingUseCase {
    private readonly DailyBuyingRepository;
    constructor(DailyBuyingRepository: IDailyBuyingRepository);
    execute(data?: CreateDailyBuyingDto): Promise<any>;
}
export declare class CreateManyDailyBuyingUseCase implements ICreateManyDailyBuyingUseCase {
    private readonly DailyBuyingRepository;
    constructor(DailyBuyingRepository: IDailyBuyingRepository);
    execute(data?: CreateManyDailyBuyingDto): Promise<any>;
}
