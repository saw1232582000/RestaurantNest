import { CreateReservationUseCase, GetReservationUseCase, UpdateReservationUseCase } from '../port/service-port/IReservationUseCase';
import { ReservationRepository } from '../port/repository-port/IReservationRepository';
import { CreateReservationDto, UpdateReservationDto } from '../dto/ReservationRequestDto';
import { ReservationResponseDto } from '../dto/ReservationResponseDto';
export declare class CreateReservationUseCaseImpl implements CreateReservationUseCase {
    private readonly reservationRepository;
    constructor(reservationRepository: ReservationRepository);
    execute(dto: CreateReservationDto): Promise<ReservationResponseDto>;
}
export declare class UpdateReservationUseCaseImpl implements UpdateReservationUseCase {
    private readonly reservationRepository;
    constructor(reservationRepository: ReservationRepository);
    execute(dto: UpdateReservationDto): Promise<ReservationResponseDto>;
}
export declare class GetReservationUseCaseImpl implements GetReservationUseCase {
    private readonly reservationRepository;
    constructor(reservationRepository: ReservationRepository);
    execute(id: string): Promise<ReservationResponseDto>;
}
