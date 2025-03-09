import { CreateVoucherUseCase, GetVoucherUseCase, UpdateVoucherUseCase } from '../port/service-port/IVoucherUseCase';
import { VoucherRepository } from '../port/repository-port/IVoucherRepository';
import { CreateVoucherDto, UpdateVoucherDto } from '../dto/VoucherRequestDto';
import { VoucherResponseDto } from '../dto/VoucherResponseDto';
export declare class CreateVoucherUseCaseImpl implements CreateVoucherUseCase {
    private readonly voucherRepository;
    constructor(voucherRepository: VoucherRepository);
    execute(dto: CreateVoucherDto): Promise<VoucherResponseDto>;
}
export declare class UpdateVoucherUseCaseImpl implements UpdateVoucherUseCase {
    private readonly voucherRepository;
    constructor(voucherRepository: VoucherRepository);
    execute(dto: UpdateVoucherDto): Promise<VoucherResponseDto>;
}
export declare class GetVoucherUseCaseImpl implements GetVoucherUseCase {
    private readonly voucherRepository;
    constructor(voucherRepository: VoucherRepository);
    execute(id: string): Promise<VoucherResponseDto>;
}
