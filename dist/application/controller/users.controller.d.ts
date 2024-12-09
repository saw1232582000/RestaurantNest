import { CreateUserUseCase } from 'src/core/domain/user/service/CreateUserUsecase';
import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';
import { GetUserUseCase } from 'src/core/domain/user/service/GetUserUsecase';
export declare class UsersController {
    private getUserUseCase;
    private createUserUseCase;
    constructor(getUserUseCase: GetUserUseCase, createUserUseCase: CreateUserUseCase);
    findOne(req: any): Promise<CoreApiResonseSchema<any>>;
}
