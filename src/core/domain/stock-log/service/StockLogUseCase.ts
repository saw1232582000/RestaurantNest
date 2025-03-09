import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateStockLogUseCase,
  GetStockLogUseCase,
} from '../port/service-port/IStockLogUseCase';
import { StockLogRepository } from '../port/repository-port/IStockLogRepository';
import { CreateStockLogDto } from '../dto/StockLogRequestDto';
import { StockLogEntity } from '../entity/StockLog';
import { StockLogResponseDto } from '../dto/StockLogResponseDto';

@Injectable()
export class CreateStockLogUseCaseImpl implements CreateStockLogUseCase {
  constructor(private readonly stockLogRepository: StockLogRepository) {}

  async execute(dto: CreateStockLogDto): Promise<StockLogResponseDto> {
    const entity = new StockLogEntity(dto);
    const created = await this.stockLogRepository.create(entity);
    return StockLogResponseDto.fromEntity(created);
  }
}

@Injectable()
export class GetStockLogUseCaseImpl implements GetStockLogUseCase {
  constructor(private readonly stockLogRepository: StockLogRepository) {}

  async execute(id: string): Promise<StockLogResponseDto> {
    const stockLog = await this.stockLogRepository.find({ id });
    if (!stockLog) throw new BadRequestException('Stock log not found');
    return stockLog;
  }
}
