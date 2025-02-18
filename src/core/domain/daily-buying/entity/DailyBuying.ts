export class DailyBuyingEntity {
  Id: string;

  particular: string;

  unit: string;

  price: number;

  quantity: number;

  Amount: number;

  createdDate: Date;

  updatedDate: Date;

  constructor(
    Id: string = '',
    particular: string,
    unit: string,
    price: number,
    quantity: number,
    Amount: number,
    createdDate?: Date,
    updatedDate?: Date,
  ) {
    this.Id = Id;
    this.particular = particular;
    this.unit = unit;
    this.price = price;
    this.quantity = quantity;
    this.Amount = Amount;
    this.createdDate = createdDate || new Date();
    this.updatedDate = updatedDate || new Date();
  }

  public static toEntity(dailyBuying: any): DailyBuyingEntity {
    return new DailyBuyingEntity(
      dailyBuying?.Id,
      dailyBuying?.particular,
      dailyBuying?.unit,
      dailyBuying?.price,
      dailyBuying?.quantity,
      dailyBuying?.Amount,
      dailyBuying?.createdDate,
      dailyBuying?.updatedDate,
    );
  }
}
