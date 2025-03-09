import { CreateReservationDto, UpdateReservationDto } from '../../dto/ReservationRequestDto';
import { ReservationResponseDto } from '../../dto/ReservationResponseDto';
export declare abstract class CreateReservationUseCase {
    abstract execute(dto: CreateReservationDto): Promise<ReservationResponseDto>;
}
export declare abstract class UpdateReservationUseCase {
    abstract execute(dto: UpdateReservationDto): Promise<ReservationResponseDto>;
}
export declare abstract class GetReservationUseCase {
    abstract execute(id: string): Promise<ReservationResponseDto>;
}
