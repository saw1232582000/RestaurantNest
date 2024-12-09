import { PrismaClient } from '@prisma/client';
import { ICartRepository } from '../port/repository-port/ICartRepository';
import { CartEntity } from '../entity/Cart';
import { AddToCartDto } from '../dto/AddToCartDto';
import { RemoveFromCartDto } from '../dto/RemoveFromCartDto';
export declare class PrismaCartRepository implements ICartRepository {
    readonly prisma: PrismaClient;
    constructor(prisma: PrismaClient);
    create(cart: CartEntity): Promise<CartEntity>;
    update(cart: CartEntity): Promise<CartEntity>;
    delete(id: string): Promise<boolean>;
    find(by: {
        id?: string;
        email?: string;
        name?: string;
    }): Promise<CartEntity | null>;
    findAll(): Promise<CartEntity[]>;
    addToCart(data: AddToCartDto): Promise<CartEntity>;
    removeFromCart(data: RemoveFromCartDto): Promise<CartEntity>;
}
