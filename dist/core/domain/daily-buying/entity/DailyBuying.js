"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyBuyingEntity = void 0;
class DailyBuyingEntity {
    constructor(Id = '', particular, unit, price, quantity, Amount, createdDate, updatedDate) {
        this.Id = Id;
        this.particular = particular;
        this.unit = unit;
        this.price = price;
        this.quantity = quantity;
        this.Amount = Amount;
        this.createdDate = createdDate || new Date();
        this.updatedDate = updatedDate || new Date();
    }
    static toEntity(dailyBuying) {
        return new DailyBuyingEntity(dailyBuying?.Id, dailyBuying?.particular, dailyBuying?.unit, dailyBuying?.price, dailyBuying?.quantity, dailyBuying?.Amount, dailyBuying?.createdDate, dailyBuying?.updatedDate);
    }
}
exports.DailyBuyingEntity = DailyBuyingEntity;
//# sourceMappingURL=DailyBuying.js.map