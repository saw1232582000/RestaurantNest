export declare class CoreApiResonseSchema<T> {
    readonly code: number;
    readonly message: string;
    readonly data: NonNullable<T>;
    readonly error: NonNullable<string>;
    constructor(code: number, message: string, data?: T, error?: string);
    static success<T>(data?: T, message?: string): CoreApiResonseSchema<T>;
    static error<T>(code?: number, message?: string, error?: string): CoreApiResonseSchema<T>;
}
