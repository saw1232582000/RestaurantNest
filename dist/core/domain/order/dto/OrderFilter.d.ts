import { Nullable } from '@src/core/common/type/CommonTypes';
import { Status } from '@src/core/common/type/StatusEnum';
import { BaseFilterSchema } from 'src/core/common/schema/BaseFilterSchema';
export declare class OrderFilter extends BaseFilterSchema {
    startDate?: Date;
    endDate?: Date;
    status: Nullable<Status>;
    constructor(startDate?: Date, endDate?: Date, take?: number, skip?: number, status?: Status);
}
