export declare class CreateVoucherDto {
    code: string;
    discount: number;
    expiryDate: string;
    isActive?: boolean;
    constructor(data: Partial<CreateVoucherDto>);
}
export declare class UpdateVoucherDto {
    id: string;
    code: string;
    discount: number;
    expiryDate: string;
    isActive: boolean;
    constructor(data: Partial<UpdateVoucherDto>);
}
