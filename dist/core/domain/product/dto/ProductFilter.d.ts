import { BaseFilterSchema } from "src/core/common/schema/BaseFilterSchema";
export declare class ProductFilter extends BaseFilterSchema {
    name?: string;
    constructor(name: string, take: number, skip: number);
}
