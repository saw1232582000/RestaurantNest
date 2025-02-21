import { IBaseUseCase } from 'src/core/common/base-usecase/port';
import { CreateManyDailyBuyingDto } from '../../dto/CreateManyDailyBuyingDto';

export abstract class ICreateManyDailyBuyingUseCase extends IBaseUseCase<
  CreateManyDailyBuyingDto,
  any
> {}
