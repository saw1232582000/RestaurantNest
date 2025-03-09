import { CoreApiResponseSchema } from '@src/core/common/schema/ApiResponseSchema';
import { ReservationResponseDto } from '@src/core/domain/reservation/dto/ReservationResponseDto';
import { CreateReservationUseCase, GetReservationUseCase, UpdateReservationUseCase } from '@src/core/domain/reservation/port/service-port/IReservationUseCase';
import { CreateReservationDto, UpdateReservationDto } from '@src/core/domain/reservation/dto/ReservationRequestDto';
export declare class ReservationController {
    private readonly createReservationUseCase;
    private readonly updateReservationUseCase;
    private readonly getReservationUseCase;
    constructor(createReservationUseCase: CreateReservationUseCase, updateReservationUseCase: UpdateReservationUseCase, getReservationUseCase: GetReservationUseCase);
    create(dto: CreateReservationDto, req: any): Promise<CoreApiResponseSchema<ReservationResponseDto>>;
    update(dto: UpdateReservationDto, req: any): Promise<CoreApiResponseSchema<ReservationResponseDto>>;
    get(id: string): Promise<CoreApiResponseSchema<ReservationResponseDto>>;
}
