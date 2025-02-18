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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDailyBuyingUseCase = void 0;
const common_1 = require("@nestjs/common");
const DailyBuying_1 = require("../entity/DailyBuying");
const IDailyBuyingRepository_1 = require("../port/repository-port/IDailyBuyingRepository");
const UpdateDailyBuyingDto_1 = require("../dto/UpdateDailyBuyingDto");
let UpdateDailyBuyingUseCase = class UpdateDailyBuyingUseCase {
    constructor(DailyBuyingRepository) {
        this.DailyBuyingRepository = DailyBuyingRepository;
    }
    async execute(data) {
        const newDailyBuying = new DailyBuying_1.DailyBuyingEntity(data?.Id, data?.particular, data?.unit, data?.price, data?.quantity, data?.Amount);
        const updatedDailyBuying = await this.DailyBuyingRepository.update(newDailyBuying);
        return UpdateDailyBuyingDto_1.UpdateDailyBuyingDto.convertToClass(updatedDailyBuying);
    }
};
exports.UpdateDailyBuyingUseCase = UpdateDailyBuyingUseCase;
exports.UpdateDailyBuyingUseCase = UpdateDailyBuyingUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [IDailyBuyingRepository_1.IDailyBuyingRepository])
], UpdateDailyBuyingUseCase);
//# sourceMappingURL=UpdateDailyBuyingUseCase.js.map