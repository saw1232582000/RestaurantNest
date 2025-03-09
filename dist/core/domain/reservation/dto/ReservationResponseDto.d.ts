import { ReservationEntity } from '../entity/Reservation';
export declare class ReservationResponseDto {
    id: string;
    userId: string;
    customerName: string;
    phone: string;
    table: string;
    reservationTime: Date;
    status: string;
    createdDate: Date;
    updatedDate: Date;
    static fromEntity(entity: ReservationEntity): ReservationResponseDto;
}
