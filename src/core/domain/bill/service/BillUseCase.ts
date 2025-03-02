// src/bill/use-case/create-bill.use-case.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateBillUseCase,
  GetBillUseCase,
  UpdateBillUseCase,
} from '../port/service-port/IBillUseCase';
import { BillRepository } from '../port/repository-port/IBillRepository';
import { CreateBillDto, UpdateBillDto } from '../dto/BillRequestDto';
import { BillResponseDto } from '../dto/BillResponseDto';
import { BillEntity } from '../entity/Bill';

@Injectable()
export class CreateBillUseCaseImpl implements CreateBillUseCase {
  constructor(private readonly billRepository: BillRepository) {}

  async execute(dto: CreateBillDto): Promise<BillResponseDto> {
    const entity = new BillEntity(dto);
    const created = await this.billRepository.create(entity);
    return BillResponseDto.fromEntity(created);
  }
}

@Injectable()
export class UpdateBillUseCaseImpl implements UpdateBillUseCase {
  constructor(private readonly billRepository: BillRepository) {}

  async execute(dto: UpdateBillDto): Promise<BillResponseDto> {
    const entity = new BillEntity(dto);
    const updated = await this.billRepository.update(entity);
    return BillResponseDto.fromEntity(updated);
  }
}

@Injectable()
export class GetBillUseCaseImpl implements GetBillUseCase {
  constructor(private readonly billRepository: BillRepository) {}

  async execute(id: string): Promise<BillResponseDto> {
    const bill = await this.billRepository.find({ id });
    if (!bill) throw new BadRequestException('Bill not found');
    return BillResponseDto.fromEntity(bill);
  }
}
