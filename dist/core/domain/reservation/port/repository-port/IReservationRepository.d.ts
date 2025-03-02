import { ReservationEntity } from '../../entity/Reservation';
export declare abstract class ReservationRepository {
    abstract create(entity: ReservationEntity): Promise<ReservationEntity>;
    abstract update(entity: ReservationEntity): Promise<ReservationEntity>;
    abstract find(by: {
        id?: string;
    }): Promise<ReservationEntity | null>;
}
