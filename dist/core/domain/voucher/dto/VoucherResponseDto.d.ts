import { VoucherEntity } from '../entity/Voucher';
export declare class VoucherResponseDto {
    id: string;
    code: string;
    discount: number;
    expiryDate: Date;
    isActive: boolean;
    createdDate: Date;
    static fromEntity(entity: VoucherEntity): VoucherResponseDto;
}
