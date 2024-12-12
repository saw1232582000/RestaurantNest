import { BaseResponseSchema } from '../../common/BaseResponseSchema';
import { GetUserResponse } from './GetUserResponseSchema';
export declare class GetUserListResponseSchema extends BaseResponseSchema<GetUserResponse[]> {
    data: GetUserResponse[];
}
