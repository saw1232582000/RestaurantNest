import { BaseFilterSchema } from "src/core/common/schema/BaseFilterSchema";
export declare class OrderFilter extends BaseFilterSchema {
    date: string;
    constructor(date: string, take: number, skip: number);
}
