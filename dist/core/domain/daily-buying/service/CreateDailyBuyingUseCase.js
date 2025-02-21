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
exports.CreateManyDailyBuyingUseCase = exports.CreateDailyBuyingUseCase = void 0;
const common_1 = require("@nestjs/common");
const DailyBuying_1 = require("../entity/DailyBuying");
const CreateDailyBuyingDto_1 = require("../dto/CreateDailyBuyingDto");
const IDailyBuyingRepository_1 = require("../port/repository-port/IDailyBuyingRepository");
let CreateDailyBuyingUseCase = class CreateDailyBuyingUseCase {
    constructor(DailyBuyingRepository) {
        this.DailyBuyingRepository = DailyBuyingRepository;
    }
    async execute(data) {
        const newDailyBuying = new DailyBuying_1.DailyBuyingEntity(data?.Id, data?.particular, data?.unit, data?.price, data?.quantity, data?.Amount, data?.createdDate, data?.updatedDate);
        const createdDailyBuying = await this.DailyBuyingRepository.create(newDailyBuying);
        return CreateDailyBuyingDto_1.CreateDailyBuyingDto.convertToClass(createdDailyBuying);
    }
};
exports.CreateDailyBuyingUseCase = CreateDailyBuyingUseCase;
exports.CreateDailyBuyingUseCase = CreateDailyBuyingUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [IDailyBuyingRepository_1.IDailyBuyingRepository])
], CreateDailyBuyingUseCase);
let CreateManyDailyBuyingUseCase = class CreateManyDailyBuyingUseCase {
    constructor(DailyBuyingRepository) {
        this.DailyBuyingRepository = DailyBuyingRepository;
    }
    async execute(data) {
        const newDailyBuying = data.dailyBuyings.map((db) => {
            return new DailyBuying_1.DailyBuyingEntity(db?.Id, db?.particular, db?.unit, db?.price, db?.quantity, db?.Amount, db?.createdDate, db?.updatedDate);
        });
        return await this.DailyBuyingRepository.createMany(newDailyBuying);
    }
};
exports.CreateManyDailyBuyingUseCase = CreateManyDailyBuyingUseCase;
exports.CreateManyDailyBuyingUseCase = CreateManyDailyBuyingUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [IDailyBuyingRepository_1.IDailyBuyingRepository])
], CreateManyDailyBuyingUseCase);
//# sourceMappingURL=CreateDailyBuyingUseCase.js.map