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
exports.GetBillUseCaseImpl = exports.UpdateBillUseCaseImpl = exports.CreateBillUseCaseImpl = void 0;
const common_1 = require("@nestjs/common");
const IBillRepository_1 = require("../port/repository-port/IBillRepository");
const BillResponseDto_1 = require("../dto/BillResponseDto");
const Bill_1 = require("../entity/Bill");
let CreateBillUseCaseImpl = class CreateBillUseCaseImpl {
    constructor(billRepository) {
        this.billRepository = billRepository;
    }
    async execute(dto) {
        const entity = new Bill_1.BillEntity(dto);
        const created = await this.billRepository.create(entity);
        return BillResponseDto_1.BillResponseDto.fromEntity(created);
    }
};
exports.CreateBillUseCaseImpl = CreateBillUseCaseImpl;
exports.CreateBillUseCaseImpl = CreateBillUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IBillRepository_1.BillRepository])
], CreateBillUseCaseImpl);
let UpdateBillUseCaseImpl = class UpdateBillUseCaseImpl {
    constructor(billRepository) {
        this.billRepository = billRepository;
    }
    async execute(dto) {
        const entity = new Bill_1.BillEntity(dto);
        const updated = await this.billRepository.update(entity);
        return BillResponseDto_1.BillResponseDto.fromEntity(updated);
    }
};
exports.UpdateBillUseCaseImpl = UpdateBillUseCaseImpl;
exports.UpdateBillUseCaseImpl = UpdateBillUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IBillRepository_1.BillRepository])
], UpdateBillUseCaseImpl);
let GetBillUseCaseImpl = class GetBillUseCaseImpl {
    constructor(billRepository) {
        this.billRepository = billRepository;
    }
    async execute(id) {
        const bill = await this.billRepository.find({ id });
        if (!bill)
            throw new common_1.BadRequestException('Bill not found');
        return BillResponseDto_1.BillResponseDto.fromEntity(bill);
    }
};
exports.GetBillUseCaseImpl = GetBillUseCaseImpl;
exports.GetBillUseCaseImpl = GetBillUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IBillRepository_1.BillRepository])
], GetBillUseCaseImpl);
//# sourceMappingURL=BillUseCase.js.map