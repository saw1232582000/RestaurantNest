export declare class CreateReservationDto {
    customerName: string;
    phone: string;
    table: string;
    reservationTime: string;
    userId?: string;
    constructor(data: Partial<CreateReservationDto>);
}
export declare class UpdateReservationDto {
    id: string;
    customerName: string;
    phone: string;
    table: string;
    reservationTime: string;
    status: string;
    userId?: string;
    constructor(data: Partial<UpdateReservationDto>);
}
