import { CartItemEntity } from '../../cart-item/entity/CartItem';
export declare class CartEntity {
    id: string;
    userId: string;
    cartItems: CartItemEntity[];
    constructor(id: string, userId: string, cartItems?: CartItemEntity[]);
    static toEntity(cart: any): CartEntity;
}
