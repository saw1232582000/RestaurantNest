import { CartEntity } from '../entity/Cart';
export declare class AddToCartDto {
    userId: string;
    productId: string;
    static convertToClass(cart: CartEntity): AddToCartDto;
}
