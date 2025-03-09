// src/bill/port/repository.port.ts

import { BillEntity } from '../../entity/Bill';

export abstract class BillRepository {
  abstract create(entity: BillEntity): Promise<BillEntity>;
  abstract update(entity: BillEntity): Promise<BillEntity>;
  abstract find(by: {
    id?: string;
    orderId?: string;
  }): Promise<BillEntity | null>;
}
