// src/voucher/port/use-case.port.ts

import {
  CreateVoucherDto,
  UpdateVoucherDto,
} from '../../dto/VoucherRequestDto';
import { VoucherResponseDto } from '../../dto/VoucherResponseDto';

export abstract class CreateVoucherUseCase {
  abstract execute(dto: CreateVoucherDto): Promise<VoucherResponseDto>;
}

export abstract class UpdateVoucherUseCase {
  abstract execute(dto: UpdateVoucherDto): Promise<VoucherResponseDto>;
}

export abstract class GetVoucherUseCase {
  abstract execute(id: string): Promise<VoucherResponseDto>;
}
