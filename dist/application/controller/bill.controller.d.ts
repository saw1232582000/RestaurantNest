import { CoreApiResponseSchema } from '@src/core/common/schema/ApiResponseSchema';
import { BillResponseDto } from '@src/core/domain/bill/dto/BillResponseDto';
import { CreateBillUseCase, GetBillUseCase, UpdateBillUseCase } from '@src/core/domain/bill/port/service-port/IBillUseCase';
import { CreateBillDto, UpdateBillDto } from '@src/core/domain/bill/dto/BillRequestDto';
export declare class BillController {
    private readonly createBillUseCase;
    private readonly updateBillUseCase;
    private readonly getBillUseCase;
    constructor(createBillUseCase: CreateBillUseCase, updateBillUseCase: UpdateBillUseCase, getBillUseCase: GetBillUseCase);
    create(dto: CreateBillDto): Promise<CoreApiResponseSchema<BillResponseDto>>;
    update(dto: UpdateBillDto): Promise<CoreApiResponseSchema<BillResponseDto>>;
    get(id: string): Promise<CoreApiResponseSchema<BillResponseDto>>;
}
