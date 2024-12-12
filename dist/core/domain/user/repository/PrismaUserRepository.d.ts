import { PrismaClient } from '@prisma/client';
import { UserEntity } from '../entity/User';
import { IUserRepository } from '../port/repository-port/IUserRepositoryPort';
import { UserFilter } from '../dto/UserFilter';
export declare class PrismaUserRepository implements IUserRepository {
    readonly prisma: PrismaClient;
    constructor(prisma: PrismaClient);
    create(user: UserEntity): Promise<UserEntity>;
    update(user: UserEntity): Promise<UserEntity>;
    delete(id: string): Promise<boolean>;
    find(by: {
        id?: string;
        email?: string;
        name?: string;
        phone?: string;
    }): Promise<UserEntity | null>;
    findAll(): Promise<UserEntity[]>;
    findAllWithSchema(filter: UserFilter): Promise<{
        users: UserEntity[];
        totalCounts: number;
    }>;
}
