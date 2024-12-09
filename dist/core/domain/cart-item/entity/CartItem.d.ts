export declare class CartItemEntity {
    id: string;
    cartId: string;
    productId: string;
    quantity: number;
    createdDate: Date;
    updatedDate: Date;
    constructor(id: string, cartId: string, productId: string, quantity: number, createdDate?: Date, updatedDate?: Date);
    static toEntity(user: any): CartItemEntity;
}
