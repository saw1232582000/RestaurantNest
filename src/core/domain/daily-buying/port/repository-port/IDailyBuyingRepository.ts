import { IBaseRepository } from 'src/core/common/base-repository/port';

import { Injectable } from '@nestjs/common';
import { DailyBuyingEntity } from '../../entity/DailyBuying';
import { DailyBuyingFilter } from '../../dto/DailyBuyingFilter';

@Injectable()
export abstract class IDailyBuyingRepository
  implements
    IBaseRepository<
      DailyBuyingEntity,
      { Id?: string; email?: string; name?: string }
    >
{
  create: (entity: DailyBuyingEntity) => Promise<DailyBuyingEntity>;
  createMany: (entity: DailyBuyingEntity[]) => Promise<string>;
  delete: (id: string) => Promise<boolean>;
  find: (by: { Id?: string }) => Promise<DailyBuyingEntity | null>;
  findAll: () => Promise<DailyBuyingEntity[]>;
  update: (entity: DailyBuyingEntity) => Promise<DailyBuyingEntity>;
  findAllWithSchema: (
    filter: DailyBuyingFilter,
  ) => Promise<{ DailyBuyings: DailyBuyingEntity[]; totalCounts: number }>;
}
