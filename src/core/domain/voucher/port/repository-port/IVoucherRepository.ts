// src/voucher/port/repository.port.ts

import { VoucherEntity } from '../../entity/Voucher';

export abstract class VoucherRepository {
  abstract create(entity: VoucherEntity): Promise<VoucherEntity>;
  abstract update(entity: VoucherEntity): Promise<VoucherEntity>;
  abstract find(by: {
    id?: string;
    code?: string;
  }): Promise<VoucherEntity | null>;
}
