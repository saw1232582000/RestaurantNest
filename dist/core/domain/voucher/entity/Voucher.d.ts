export declare class VoucherEntity {
    id: string;
    code: string;
    discount: number;
    expiryDate: Date;
    isActive: boolean;
    createdDate: Date;
    constructor(data: Partial<VoucherEntity>);
}
