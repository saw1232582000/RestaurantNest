export declare class BillEntity {
    id: string;
    orderId: string;
    totalAmount: number;
    tax?: number;
    discount?: number;
    finalAmount: number;
    status: string;
    paymentMethod?: string;
    createdDate: Date;
    constructor(data: Partial<BillEntity>);
}
