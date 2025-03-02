import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateReservationUseCase,
  GetReservationUseCase,
  UpdateReservationUseCase,
} from '../port/service-port/IReservationUseCase';
import { ReservationRepository } from '../port/repository-port/IReservationRepository';
import {
  CreateReservationDto,
  UpdateReservationDto,
} from '../dto/ReservationRequestDto';
import { ReservationResponseDto } from '../dto/ReservationResponseDto';
import { ReservationEntity } from '../entity/Reservation';

@Injectable()
export class CreateReservationUseCaseImpl implements CreateReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async execute(dto: CreateReservationDto): Promise<ReservationResponseDto> {
    const entity = new ReservationEntity({
      ...dto,
      reservationTime: new Date(dto.reservationTime),
    });
    const created = await this.reservationRepository.create(entity);
    return ReservationResponseDto.fromEntity(created);
  }
}

@Injectable()
export class UpdateReservationUseCaseImpl implements UpdateReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async execute(dto: UpdateReservationDto): Promise<ReservationResponseDto> {
    const entity = new ReservationEntity({
      ...dto,
      reservationTime: new Date(dto.reservationTime),
    });
    const updated = await this.reservationRepository.update(entity);
    return ReservationResponseDto.fromEntity(updated);
  }
}

@Injectable()
export class GetReservationUseCaseImpl implements GetReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async execute(id: string): Promise<ReservationResponseDto> {
    const reservation = await this.reservationRepository.find({ id });
    if (!reservation) throw new BadRequestException('Reservation not found');
    return ReservationResponseDto.fromEntity(reservation);
  }
}
