import { CreateBillUseCase, GetBillUseCase, UpdateBillUseCase } from '../port/service-port/IBillUseCase';
import { BillRepository } from '../port/repository-port/IBillRepository';
import { CreateBillDto, UpdateBillDto } from '../dto/BillRequestDto';
import { BillResponseDto } from '../dto/BillResponseDto';
export declare class CreateBillUseCaseImpl implements CreateBillUseCase {
    private readonly billRepository;
    constructor(billRepository: BillRepository);
    execute(dto: CreateBillDto): Promise<BillResponseDto>;
}
export declare class UpdateBillUseCaseImpl implements UpdateBillUseCase {
    private readonly billRepository;
    constructor(billRepository: BillRepository);
    execute(dto: UpdateBillDto): Promise<BillResponseDto>;
}
export declare class GetBillUseCaseImpl implements GetBillUseCase {
    private readonly billRepository;
    constructor(billRepository: BillRepository);
    execute(id: string): Promise<BillResponseDto>;
}
