export declare class CreateBillDto {
    orderId: string;
    totalAmount: number;
    tax?: number;
    discount?: number;
    finalAmount: number;
    paymentMethod?: string;
    constructor(data: Partial<CreateBillDto>);
}
export declare class UpdateBillDto {
    id: string;
    totalAmount: number;
    tax?: number;
    discount?: number;
    finalAmount: number;
    paymentMethod?: string;
    status?: string;
    constructor(data: Partial<UpdateBillDto>);
}
