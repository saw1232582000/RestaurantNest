import { Inject, Injectable } from '@nestjs/common';
import { ICreateDailyBuyingUseCase } from '../port/service-port/ICreateDailyBuyingUseCase';
import { DailyBuyingEntity } from '../entity/DailyBuying';
import { CreateDailyBuyingDto } from '../dto/CreateDailyBuyingDto';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
import { IGetDailyBuyingUseCase } from '../port/service-port/IGetDailyBuyingUseCase';

@Injectable()
export class GetDailyBuyingUseCase implements IGetDailyBuyingUseCase {
  constructor(
    @Inject() private readonly DailyBuyingRepository: IDailyBuyingRepository,
  ) {}
  public async execute(id: string): Promise<any> {
    const DailyBuying = await this.DailyBuyingRepository.find({ Id: id });

    return CreateDailyBuyingDto.convertToClass(DailyBuying);
  }
}
