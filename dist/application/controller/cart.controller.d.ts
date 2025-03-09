import { AddToCartRequestSchema } from './documentation/cart/RequestSchema/AddToCartRequestSchema';
import { RemoveFromCartRequestSchema } from './documentation/cart/RequestSchema/ReoveFromCardRequestSchema';
import { AddToCartUseCase } from 'src/core/domain/cart/service/AddToCartUseCase';
import { RemoveFromCartUseCase } from 'src/core/domain/cart/service/RemoveFromCartUseCase';
import { CoreApiResponseSchema } from 'src/core/common/schema/ApiResponseSchema';
export declare class CartController {
    private addToCartUseCase;
    private removeFromCartUseCase;
    constructor(addToCartUseCase: AddToCartUseCase, removeFromCartUseCase: RemoveFromCartUseCase);
    addToCart(product: AddToCartRequestSchema, req: any): Promise<CoreApiResponseSchema<{
        message: string;
    }>>;
    removeFromCart(product: RemoveFromCartRequestSchema, req: any): Promise<CoreApiResponseSchema<{
        message: string;
    }>>;
}
