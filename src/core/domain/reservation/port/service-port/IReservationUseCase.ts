// src/reservation/port/use-case.port.ts

import {
  CreateReservationDto,
  UpdateReservationDto,
} from '../../dto/ReservationRequestDto';
import { ReservationResponseDto } from '../../dto/ReservationResponseDto';

export abstract class CreateReservationUseCase {
  abstract execute(dto: CreateReservationDto): Promise<ReservationResponseDto>;
}

export abstract class UpdateReservationUseCase {
  abstract execute(dto: UpdateReservationDto): Promise<ReservationResponseDto>;
}

export abstract class GetReservationUseCase {
  abstract execute(id: string): Promise<ReservationResponseDto>;
}
