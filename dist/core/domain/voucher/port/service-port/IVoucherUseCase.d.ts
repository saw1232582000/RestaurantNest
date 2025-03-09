import { CreateVoucherDto, UpdateVoucherDto } from '../../dto/VoucherRequestDto';
import { VoucherResponseDto } from '../../dto/VoucherResponseDto';
export declare abstract class CreateVoucherUseCase {
    abstract execute(dto: CreateVoucherDto): Promise<VoucherResponseDto>;
}
export declare abstract class UpdateVoucherUseCase {
    abstract execute(dto: UpdateVoucherDto): Promise<VoucherResponseDto>;
}
export declare abstract class GetVoucherUseCase {
    abstract execute(id: string): Promise<VoucherResponseDto>;
}
