export declare class ReservationEntity {
    id: string;
    userId: string;
    customerName: string;
    phone: string;
    table: string;
    reservationTime: Date;
    status: string;
    createdDate: Date;
    updatedDate: Date;
    constructor(data: Partial<ReservationEntity>);
}
