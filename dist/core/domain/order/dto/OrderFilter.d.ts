import { Status } from "@src/core/common/type/StatusEnum";
import { BaseFilterSchema } from "src/core/common/schema/BaseFilterSchema";
export declare class OrderFilter extends BaseFilterSchema {
    startDate: string;
    endDate: string;
    status: Status;
    constructor(startDate: string, endDate: string, take: number, skip: number, status: Status);
}
