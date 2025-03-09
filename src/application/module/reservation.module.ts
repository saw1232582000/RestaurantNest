import { Module } from '@nestjs/common';
import { ReservationController } from '../controller/reservation.controller';
import {
  CreateReservationUseCase,
  GetReservationUseCase,
  UpdateReservationUseCase,
} from '@src/core/domain/reservation/port/service-port/IReservationUseCase';
import { ReservationRepository } from '@src/core/domain/reservation/port/repository-port/IReservationRepository';
import {
  CreateReservationUseCaseImpl,
  GetReservationUseCaseImpl,
  UpdateReservationUseCaseImpl,
} from '@src/core/domain/reservation/service/ReservationUseCase';
import { PrismaReservationRepository } from '@src/core/domain/reservation/repository/PrismaReservationRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Module({
  controllers: [ReservationController],
  providers: [
    {
      provide: CreateReservationUseCase,
      useClass: CreateReservationUseCaseImpl,
    },
    {
      provide: UpdateReservationUseCase,
      useClass: UpdateReservationUseCaseImpl,
    },
    { provide: GetReservationUseCase, useClass: GetReservationUseCaseImpl },
    { provide: ReservationRepository, useClass: PrismaReservationRepository },
    PrismaService,
    JwtGuard,
  ],
})
export class ReservationModule {}
