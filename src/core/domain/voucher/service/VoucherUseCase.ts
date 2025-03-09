// src/voucher/use-case/create-voucher.use-case.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateVoucherUseCase,
  GetVoucherUseCase,
  UpdateVoucherUseCase,
} from '../port/service-port/IVoucherUseCase';
import { VoucherRepository } from '../port/repository-port/IVoucherRepository';
import { CreateVoucherDto, UpdateVoucherDto } from '../dto/VoucherRequestDto';
import { VoucherResponseDto } from '../dto/VoucherResponseDto';
import { VoucherEntity } from '../entity/Voucher';

@Injectable()
export class CreateVoucherUseCaseImpl implements CreateVoucherUseCase {
  constructor(private readonly voucherRepository: VoucherRepository) {}

  async execute(dto: CreateVoucherDto): Promise<VoucherResponseDto> {
    const entity = new VoucherEntity({
      ...dto,
      expiryDate: new Date(dto.expiryDate),
    });
    const created = await this.voucherRepository.create(entity);
    return VoucherResponseDto.fromEntity(created);
  }
}

@Injectable()
export class UpdateVoucherUseCaseImpl implements UpdateVoucherUseCase {
  constructor(private readonly voucherRepository: VoucherRepository) {}

  async execute(dto: UpdateVoucherDto): Promise<VoucherResponseDto> {
    const entity = new VoucherEntity({
      ...dto,
      expiryDate: new Date(dto.expiryDate),
    });
    const updated = await this.voucherRepository.update(entity);
    return VoucherResponseDto.fromEntity(updated);
  }
}

@Injectable()
export class GetVoucherUseCaseImpl implements GetVoucherUseCase {
  constructor(private readonly voucherRepository: VoucherRepository) {}

  async execute(id: string): Promise<VoucherResponseDto> {
    const voucher = await this.voucherRepository.find({ id });
    if (!voucher) throw new BadRequestException('Voucher not found');
    return VoucherResponseDto.fromEntity(voucher);
  }
}
