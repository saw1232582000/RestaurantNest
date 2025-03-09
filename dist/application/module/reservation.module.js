"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationModule = void 0;
const common_1 = require("@nestjs/common");
const reservation_controller_1 = require("../controller/reservation.controller");
const IReservationUseCase_1 = require("../../core/domain/reservation/port/service-port/IReservationUseCase");
const IReservationRepository_1 = require("../../core/domain/reservation/port/repository-port/IReservationRepository");
const ReservationUseCase_1 = require("../../core/domain/reservation/service/ReservationUseCase");
const PrismaReservationRepository_1 = require("../../core/domain/reservation/repository/PrismaReservationRepository");
const PrismaService_1 = require("../../core/common/prisma/PrismaService");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
let ReservationModule = class ReservationModule {
};
exports.ReservationModule = ReservationModule;
exports.ReservationModule = ReservationModule = __decorate([
    (0, common_1.Module)({
        controllers: [reservation_controller_1.ReservationController],
        providers: [
            {
                provide: IReservationUseCase_1.CreateReservationUseCase,
                useClass: ReservationUseCase_1.CreateReservationUseCaseImpl,
            },
            {
                provide: IReservationUseCase_1.UpdateReservationUseCase,
                useClass: ReservationUseCase_1.UpdateReservationUseCaseImpl,
            },
            { provide: IReservationUseCase_1.GetReservationUseCase, useClass: ReservationUseCase_1.GetReservationUseCaseImpl },
            { provide: IReservationRepository_1.ReservationRepository, useClass: PrismaReservationRepository_1.PrismaReservationRepository },
            PrismaService_1.PrismaService,
            jwt_guard_1.JwtGuard,
        ],
    })
], ReservationModule);
//# sourceMappingURL=reservation.module.js.map