import { BaseFilterSchema } from '../../common/BaseFilterSchema';
import { Status } from '@src/core/common/type/StatusEnum';
export declare class OrderFilterSchama extends BaseFilterSchema {
    startDate?: string;
    endDate?: string;
    status?: Status;
}
