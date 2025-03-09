import { VoucherEntity } from '../../entity/Voucher';
export declare abstract class VoucherRepository {
    abstract create(entity: VoucherEntity): Promise<VoucherEntity>;
    abstract update(entity: VoucherEntity): Promise<VoucherEntity>;
    abstract find(by: {
        id?: string;
        code?: string;
    }): Promise<VoucherEntity | null>;
}
