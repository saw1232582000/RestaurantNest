import { IBaseUseCase } from 'src/core/common/base-usecase/port';
import { CreateDailyBuyingDto } from '../../dto/CreateDailyBuyingDto';
export interface ICreateDailyBuyingUseCase extends IBaseUseCase<CreateDailyBuyingDto, any> {
}
