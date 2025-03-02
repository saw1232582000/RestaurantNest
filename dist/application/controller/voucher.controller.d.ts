import { CoreApiResponseSchema } from '@src/core/common/schema/ApiResponseSchema';
import { VoucherResponseDto } from '@src/core/domain/voucher/dto/VoucherResponseDto';
import { CreateVoucherUseCase, GetVoucherUseCase, UpdateVoucherUseCase } from '@src/core/domain/voucher/port/service-port/IVoucherUseCase';
import { CreateVoucherDto, UpdateVoucherDto } from '@src/core/domain/voucher/dto/VoucherRequestDto';
export declare class VoucherController {
    private readonly createVoucherUseCase;
    private readonly updateVoucherUseCase;
    private readonly getVoucherUseCase;
    constructor(createVoucherUseCase: CreateVoucherUseCase, updateVoucherUseCase: UpdateVoucherUseCase, getVoucherUseCase: GetVoucherUseCase);
    create(dto: CreateVoucherDto): Promise<CoreApiResponseSchema<VoucherResponseDto>>;
    update(dto: UpdateVoucherDto): Promise<CoreApiResponseSchema<VoucherResponseDto>>;
    get(id: string): Promise<CoreApiResponseSchema<VoucherResponseDto>>;
}
