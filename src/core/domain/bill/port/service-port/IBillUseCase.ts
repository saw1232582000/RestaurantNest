// src/bill/port/use-case.port.ts

import { CreateBillDto, UpdateBillDto } from '../../dto/BillRequestDto';
import { BillResponseDto } from '../../dto/BillResponseDto';

export abstract class CreateBillUseCase {
  abstract execute(dto: CreateBillDto): Promise<BillResponseDto>;
}

export abstract class UpdateBillUseCase {
  abstract execute(dto: UpdateBillDto): Promise<BillResponseDto>;
}

export abstract class GetBillUseCase {
  abstract execute(id: string): Promise<BillResponseDto>;
}
