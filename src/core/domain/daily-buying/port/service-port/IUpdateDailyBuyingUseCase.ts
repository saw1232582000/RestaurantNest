import { IBaseUseCase } from 'src/core/common/base-usecase/port';
import { CreateDailyBuyingDto } from '../../dto/CreateDailyBuyingDto';

export interface IUpdateDailyBuyingUseCase
  extends IBaseUseCase<CreateDailyBuyingDto, any> {}
