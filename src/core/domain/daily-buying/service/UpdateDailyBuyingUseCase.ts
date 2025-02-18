import { Inject, Injectable } from '@nestjs/common';
import { ICreateDailyBuyingUseCase } from '../port/service-port/ICreateDailyBuyingUseCase';
import { DailyBuyingEntity } from '../entity/DailyBuying';
import { IUpdateDailyBuyingUseCase } from '../port/service-port/IUpdateDailyBuyingUseCase';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
import { UpdateDailyBuyingDto } from '../dto/UpdateDailyBuyingDto';

@Injectable()
export class UpdateDailyBuyingUseCase implements IUpdateDailyBuyingUseCase {
  constructor(
    @Inject() private readonly DailyBuyingRepository: IDailyBuyingRepository,
  ) {}
  public async execute(data?: UpdateDailyBuyingDto): Promise<any> {
    const newDailyBuying = new DailyBuyingEntity(
      data?.Id,
      data?.particular,
      data?.unit,
      data?.price,
      data?.quantity,
      data?.Amount,
    );
    const updatedDailyBuying =
      await this.DailyBuyingRepository.update(newDailyBuying);

    return UpdateDailyBuyingDto.convertToClass(updatedDailyBuying);
  }
}
