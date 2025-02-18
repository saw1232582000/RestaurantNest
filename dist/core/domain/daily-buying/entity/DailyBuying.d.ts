export declare class DailyBuyingEntity {
    Id: string;
    particular: string;
    unit: string;
    price: number;
    quantity: number;
    Amount: number;
    createdDate: Date;
    updatedDate: Date;
    constructor(Id: string, particular: string, unit: string, price: number, quantity: number, Amount: number, createdDate?: Date, updatedDate?: Date);
    static toEntity(dailyBuying: any): DailyBuyingEntity;
}
