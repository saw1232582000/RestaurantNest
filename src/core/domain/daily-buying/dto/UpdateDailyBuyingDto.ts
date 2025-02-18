import { Expose, plainToInstance } from 'class-transformer';

import { DailyBuyingEntity } from '../entity/DailyBuying';
import { Nullable } from 'src/core/common/type/CommonTypes';

export class UpdateDailyBuyingDto {
  @Expose()
  Id: Nullable<string>;

  @Expose()
  particular: string;

  @Expose()
  unit: string;

  @Expose()
  price: number;

  @Expose()
  quantity: number;

  @Expose()
  Amount: number;

  @Expose()
  category: string;

  @Expose()
  createdDate: Nullable<Date>;

  @Expose()
  updatedDate: Nullable<Date>;

  public static convertToClass(DailyBuying: DailyBuyingEntity) {
    return plainToInstance(UpdateDailyBuyingDto, DailyBuying, {
      excludeExtraneousValues: true,
    });
  }
}
