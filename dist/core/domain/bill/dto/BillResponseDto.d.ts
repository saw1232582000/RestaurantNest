import { BillEntity } from '../entity/Bill';
export declare class BillResponseDto {
    id: string;
    orderId: string;
    totalAmount: number;
    tax?: number;
    discount?: number;
    finalAmount: number;
    status: string;
    paymentMethod?: string;
    createdDate: Date;
    static fromEntity(entity: BillEntity): BillResponseDto;
}
