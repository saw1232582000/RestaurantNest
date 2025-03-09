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
exports.GetVoucherUseCaseImpl = exports.UpdateVoucherUseCaseImpl = exports.CreateVoucherUseCaseImpl = void 0;
const common_1 = require("@nestjs/common");
const IVoucherRepository_1 = require("../port/repository-port/IVoucherRepository");
const VoucherResponseDto_1 = require("../dto/VoucherResponseDto");
const Voucher_1 = require("../entity/Voucher");
let CreateVoucherUseCaseImpl = class CreateVoucherUseCaseImpl {
    constructor(voucherRepository) {
        this.voucherRepository = voucherRepository;
    }
    async execute(dto) {
        const entity = new Voucher_1.VoucherEntity({
            ...dto,
            expiryDate: new Date(dto.expiryDate),
        });
        const created = await this.voucherRepository.create(entity);
        return VoucherResponseDto_1.VoucherResponseDto.fromEntity(created);
    }
};
exports.CreateVoucherUseCaseImpl = CreateVoucherUseCaseImpl;
exports.CreateVoucherUseCaseImpl = CreateVoucherUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IVoucherRepository_1.VoucherRepository])
], CreateVoucherUseCaseImpl);
let UpdateVoucherUseCaseImpl = class UpdateVoucherUseCaseImpl {
    constructor(voucherRepository) {
        this.voucherRepository = voucherRepository;
    }
    async execute(dto) {
        const entity = new Voucher_1.VoucherEntity({
            ...dto,
            expiryDate: new Date(dto.expiryDate),
        });
        const updated = await this.voucherRepository.update(entity);
        return VoucherResponseDto_1.VoucherResponseDto.fromEntity(updated);
    }
};
exports.UpdateVoucherUseCaseImpl = UpdateVoucherUseCaseImpl;
exports.UpdateVoucherUseCaseImpl = UpdateVoucherUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IVoucherRepository_1.VoucherRepository])
], UpdateVoucherUseCaseImpl);
let GetVoucherUseCaseImpl = class GetVoucherUseCaseImpl {
    constructor(voucherRepository) {
        this.voucherRepository = voucherRepository;
    }
    async execute(id) {
        const voucher = await this.voucherRepository.find({ id });
        if (!voucher)
            throw new common_1.BadRequestException('Voucher not found');
        return VoucherResponseDto_1.VoucherResponseDto.fromEntity(voucher);
    }
};
exports.GetVoucherUseCaseImpl = GetVoucherUseCaseImpl;
exports.GetVoucherUseCaseImpl = GetVoucherUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IVoucherRepository_1.VoucherRepository])
], GetVoucherUseCaseImpl);
//# sourceMappingURL=VoucherUseCase.js.map