import { BaseResponseSchema } from '../../common/BaseResponseSchema';
declare class CreateOrderResponse {
    message: string;
}
export declare class CreateOrderResponseSchema extends BaseResponseSchema<CreateOrderResponse> {
    data: CreateOrderResponse;
}
export {};
