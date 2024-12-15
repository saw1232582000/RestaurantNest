import { IBaseUseCase } from "@src/core/common/base-usecase/port";
import { UpdateOrderStatusDto } from '../../dto/UpdateOrderStatusDto';

export interface IUpdateOrderStatusUseCase extends IBaseUseCase<UpdateOrderStatusDto, any> {}
