"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReservationUseCaseImpl = exports.UpdateReservationUseCaseImpl = exports.CreateReservationUseCaseImpl = void 0;
const common_1 = require("@nestjs/common");
const IReservationRepository_1 = require("../port/repository-port/IReservationRepository");
const ReservationResponseDto_1 = require("../dto/ReservationResponseDto");
const Reservation_1 = require("../entity/Reservation");
let CreateReservationUseCaseImpl = class CreateReservationUseCaseImpl {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    async execute(dto) {
        const entity = new Reservation_1.ReservationEntity({
            ...dto,
            reservationTime: new Date(dto.reservationTime),
        });
        const created = await this.reservationRepository.create(entity);
        return ReservationResponseDto_1.ReservationResponseDto.fromEntity(created);
    }
};
exports.CreateReservationUseCaseImpl = CreateReservationUseCaseImpl;
exports.CreateReservationUseCaseImpl = CreateReservationUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IReservationRepository_1.ReservationRepository])
], CreateReservationUseCaseImpl);
let UpdateReservationUseCaseImpl = class UpdateReservationUseCaseImpl {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    async execute(dto) {
        const entity = new Reservation_1.ReservationEntity({
            ...dto,
            reservationTime: new Date(dto.reservationTime),
        });
        const updated = await this.reservationRepository.update(entity);
        return ReservationResponseDto_1.ReservationResponseDto.fromEntity(updated);
    }
};
exports.UpdateReservationUseCaseImpl = UpdateReservationUseCaseImpl;
exports.UpdateReservationUseCaseImpl = UpdateReservationUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IReservationRepository_1.ReservationRepository])
], UpdateReservationUseCaseImpl);
let GetReservationUseCaseImpl = class GetReservationUseCaseImpl {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    async execute(id) {
        const reservation = await this.reservationRepository.find({ id });
        if (!reservation)
            throw new common_1.BadRequestException('Reservation not found');
        return ReservationResponseDto_1.ReservationResponseDto.fromEntity(reservation);
    }
};
exports.GetReservationUseCaseImpl = GetReservationUseCaseImpl;
exports.GetReservationUseCaseImpl = GetReservationUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IReservationRepository_1.ReservationRepository])
], GetReservationUseCaseImpl);
//# sourceMappingURL=ReservationUseCase.js.map