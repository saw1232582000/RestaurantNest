import { BaseFilterSchema } from 'src/core/common/schema/BaseFilterSchema';
export declare class ProductFilter extends BaseFilterSchema {
    name?: string;
    category?: string;
    constructor(category: string, name: string, take: number, skip: number);
}
