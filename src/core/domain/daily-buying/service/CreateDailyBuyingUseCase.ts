import { Inject, Injectable } from '@nestjs/common';
import { ICreateDailyBuyingUseCase } from '../port/service-port/ICreateDailyBuyingUseCase';
import { DailyBuyingEntity } from '../entity/DailyBuying';
import { CreateDailyBuyingDto } from '../dto/CreateDailyBuyingDto';
import { IDailyBuyingRepository } from '../port/repository-port/IDailyBuyingRepository';
import { ICreateManyDailyBuyingUseCase } from '../port/service-port/ICreateManyDailyBuyingUseCase';
import { CreateManyDailyBuyingDto } from '../dto/CreateManyDailyBuyingDto';

@Injectable()
export class CreateDailyBuyingUseCase implements ICreateDailyBuyingUseCase {
  constructor(
    @Inject() private readonly DailyBuyingRepository: IDailyBuyingRepository,
  ) {}
  public async execute(data?: CreateDailyBuyingDto): Promise<any> {
    const newDailyBuying = new DailyBuyingEntity(
      data?.Id,
      data?.particular,
      data?.unit,
      data?.price,
      data?.quantity,
      data?.Amount,
      data?.createdDate,
      data?.updatedDate,
    );
    const createdDailyBuying =
      await this.DailyBuyingRepository.create(newDailyBuying);

    return CreateDailyBuyingDto.convertToClass(createdDailyBuying);
  }
}

@Injectable()
export class CreateManyDailyBuyingUseCase
  implements ICreateManyDailyBuyingUseCase
{
  constructor(
    @Inject() private readonly DailyBuyingRepository: IDailyBuyingRepository,
  ) {}
  public async execute(data?: CreateManyDailyBuyingDto): Promise<any> {
    const newDailyBuying = data.DailyBuyings.map((db) => {
      return new DailyBuyingEntity(
        db?.Id,
        db?.particular,
        db?.unit,
        db?.price,
        db?.quantity,
        db?.Amount,
        db?.createdDate,
        db?.updatedDate,
      );
    });

    return await this.DailyBuyingRepository.createMany(newDailyBuying);
  }
}
