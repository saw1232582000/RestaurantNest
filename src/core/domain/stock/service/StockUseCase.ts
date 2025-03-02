import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateStockUseCase,
  GetStockUseCase,
  UpdateStockUseCase,
} from '../port/service-port/IStockUseCase';
import { StockRepository } from '../port/repository-port/IStockRepository';
import { CreateStockDto, UpdateStockDto } from '../dto/StockRequestDto';
import { StockResponseDto } from '../dto/StockResponseDto';
import { StockEntity } from '../entity/Stock';

@Injectable()
export class CreateStockUseCaseImpl implements CreateStockUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute(dto: CreateStockDto): Promise<StockResponseDto> {
    const entity = new StockEntity(dto);
    const created = await this.stockRepository.create(entity);
    return StockResponseDto.fromEntity(created);
  }
}

@Injectable()
export class UpdateStockUseCaseImpl implements UpdateStockUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute(dto: UpdateStockDto): Promise<StockResponseDto> {
    const entity = new StockEntity(dto);
    const updated = await this.stockRepository.update(entity);
    return StockResponseDto.fromEntity(updated);
  }
}

@Injectable()
export class GetStockUseCaseImpl implements GetStockUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute(id: string): Promise<StockResponseDto> {
    const stock = await this.stockRepository.find({ id });
    if (!stock) throw new BadRequestException('Stock not found');
    return StockResponseDto.fromEntity(stock);
  }
}
