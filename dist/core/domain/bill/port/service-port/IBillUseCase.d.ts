import { CreateBillDto, UpdateBillDto } from '../../dto/BillRequestDto';
import { BillResponseDto } from '../../dto/BillResponseDto';
export declare abstract class CreateBillUseCase {
    abstract execute(dto: CreateBillDto): Promise<BillResponseDto>;
}
export declare abstract class UpdateBillUseCase {
    abstract execute(dto: UpdateBillDto): Promise<BillResponseDto>;
}
export declare abstract class GetBillUseCase {
    abstract execute(id: string): Promise<BillResponseDto>;
}
