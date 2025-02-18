import { Inject, Injectable } from '@nestjs/common';

import { CreateDailyBuyingDto } from '../dto/CreateDailyBuyingDto';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';

import { DailyBuyingFilter } from '../dto/DailyBuyingFilter';
import { IGetDailyBuyingListUseCase } from '../port/service-port/IGetDailyBuyingList';

@Injectable()
export class GetDailyBuyingListUseCase implements IGetDailyBuyingListUseCase {
  constructor(
    @Inject() private readonly DailyBuyingRepository: IDailyBuyingRepository,
  ) {}
  public async execute(): Promise<any> {
    const DailyBuyings = await this.DailyBuyingRepository.findAll();

    return DailyBuyings.map((DailyBuying) =>
      CreateDailyBuyingDto.convertToClass(DailyBuying),
    );
  }
}

@Injectable()
export class GetDailyBuyingListWithFilterUseCase
  implements IGetDailyBuyingListUseCase
{
  constructor(
    @Inject() private readonly DailyBuyingRepository: IDailyBuyingRepository,
  ) {}
  public async execute(filter: DailyBuyingFilter): Promise<any> {
    const list = await this.DailyBuyingRepository.findAllWithSchema(filter);

    return {
      DailyBuyings: list.DailyBuyings.map((DailyBuying) =>
        CreateDailyBuyingDto.convertToClass(DailyBuying),
      ),
      totalCounts: list.totalCounts,
    };
  }
}
