import { IBaseUseCase } from "@src/core/common/base-usecase/port";
import { UpdateOrderItemDto } from "@src/core/domain/order/dto/UpdateOrderItemDto";

export interface IUpdateOrderItemUseCase extends IBaseUseCase<UpdateOrderItemDto, any> {}
    