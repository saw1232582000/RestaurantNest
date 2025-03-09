import { ReservationRepository } from '../port/repository-port/IReservationRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { ReservationEntity } from '../entity/Reservation';
export declare class PrismaReservationRepository implements ReservationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(entity: ReservationEntity): Promise<ReservationEntity>;
    update(entity: ReservationEntity): Promise<ReservationEntity>;
    find(by: {
        id?: string;
    }): Promise<ReservationEntity | null>;
    private handlePrismaError;
}
